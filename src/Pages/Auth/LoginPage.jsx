import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../logicHook/auth/LoginHook";
import { ToastContainer } from "react-toastify";
const LoginPage = () => {
  const { setUser, submitUser } = LoginHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            onChange={(e) => {
              setUser((prevState) => {
                const updatedState = { ...prevState, email: e.target.value };
                return updatedState;
              });
            }}
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
            onChange={(e) => {
              setUser((prevState) => {
                const updatedState = { ...prevState, password: e.target.value };
                return updatedState;
              });
            }}
          />
          <button className="btn-login mx-auto mt-4" onClick={submitUser}>
            تسجيل الدخول
          </button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
          <label className="mx-auto my-4">
            <Link to="/user/forget-password" style={{ textDecoration: "none" }}>
              هل نسيت كلمة السر
            </Link>
          </label>
        </Col>
        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              دخول ادمن
            </span>
          </Link>
        </label>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
