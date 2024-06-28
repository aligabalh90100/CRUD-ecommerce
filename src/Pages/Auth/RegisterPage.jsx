import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../logicHook/auth/RegisterHook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const { setUserData, SubmitUser, userData } = RegisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            placeholder="اسم المستخدم..."
            name="user"
            type="text"
            value={userData.name}
            className="user-input mt-3 text-center mx-auto"
            onChange={(e) => {
              setUserData((prevState) => {
                const updatedSate = { ...prevState, name: e.target.value };
                return updatedSate;
              });
            }}
          />
          <input
            placeholder="الايميل..."
            name="email"
            type="email"
            value={userData.email}
            className="user-input mt-3 text-center mx-auto"
            onChange={(e) => {
              setUserData((prevState) => {
                const updatedSate = { ...prevState, email: e.target.value };
                return updatedSate;
              });
            }}
          />
          <input
            placeholder="كلمه السر..."
            value={userData.password}
            name="password"
            type="password"
            className="user-input mt-3 text-center mx-auto"
            onChange={(e) => {
              setUserData((prevState) => {
                const updatedSate = { ...prevState, password: e.target.value };
                return updatedSate;
              });
            }}
          />
          <input
            placeholder=" تاكيد كلمة السر..."
            name="confirmPassword"
            type="password"
            value={userData.passwordConfirm}
            className="user-input mt-3 text-center mx-auto"
            onChange={(e) => {
              setUserData((prevState) => {
                const updatedSate = {
                  ...prevState,
                  passwordConfirm: e.target.value,
                };
                return updatedSate;
              });
            }}
          />
          <input
            placeholder="الهاتف..."
            value={userData.phone}
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
            className="user-input mt-3 text-center mx-auto"
            onChange={(e) => {
              setUserData((prevState) => {
                const updatedSate = { ...prevState, phone: e.target.value };
                return updatedSate;
              });
            }}
          />

          <button className="btn-login mx-auto mt-4" onClick={SubmitUser}>
            تسجيل الحساب
          </button>
          <label className="mx-auto mt-4">
            لديك حساب بالفعل؟
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
