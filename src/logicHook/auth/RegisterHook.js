import { useEffect, useState } from "react";
import notify from "../Notify";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(true);
  const validation = () => {
    if (userData.name === "") {
      notify("رجاء ادخال اسم المستخدم", "error");
      return;
    }
    if (userData.phone.length < 11) {
      notify("رجاء ادخال هاتف صحيح ", "error");
      return;
    }
    if (userData.password !== userData.passwordConfirm) {
      notify("من فضلك تاكد من كلمة السر", "error");
      return;
    }
  };
  const { createUser } = useSelector((state) => state.authReducer);
  async function SubmitUser() {
    validation();
    setLoading(true);
    await dispatch(createNewUser(userData));
    setLoading(false);
  }
  useEffect(() => {
    if (!loading) {
      if (createUser.data.token) {
        localStorage.setItem("token", createUser.data.token);
        notify("تم تسجيل الحساب بنجاح", "success");
        setUserData({
          name: "",
          password: "",
          email: "",
          phone: "",
          passwordConfirm: "",
        });
        setLoading(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      if (createUser.data.errors) {
        notify(createUser.data.errors[0].msg, "error");
      }
    }
  }, [loading]);

  return { setUserData, SubmitUser, userData };
};

export default RegisterHook;
