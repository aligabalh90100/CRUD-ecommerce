import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/actions/authAction";
import notify from "../Notify";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function submitUser() {
    setLoading(true);
    await dispatch(signInUser(user));
    setLoading(false);
  }
  const { loginUser } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (!loading) {
      if (loginUser.data) {
        if (loginUser.data.token) {
          localStorage.setItem("token", loginUser.data.token);
          localStorage.setItem("data", JSON.stringify(loginUser.data.data));

          // navigate("/");

          // navigate("/admin/allproducts");

          window.location.href = "/";
        } else {
          localStorage.removeItem("data");
          localStorage.removeItem("token");
          notify(loginUser.data.message, "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);
  return { setUser, submitUser };
};

export default LoginHook;
