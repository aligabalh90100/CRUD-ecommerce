import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordAction } from "../../redux/actions/authAction";

const FrogetPasswordHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  async function onSubmit() {
    await dispatch(forgetPasswordAction({ email }));
    setLoading(false);
  }
  console.log(email);
  const { forgetPassword } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (!loading) {
      if (forgetPassword) {
        console.log(forgetPassword);
      }
    }
  }, [loading]);
  return { setEmail, email, onSubmit };
};

export default FrogetPasswordHook;
