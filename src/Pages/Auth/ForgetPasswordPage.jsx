import { Container, Row, Col } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import FrogetPasswordHook from "../../logicHook/auth/FrogetPasswordHook";
const ForgetPasswordPage = () => {
  const { email, setEmail, onSubmit } = FrogetPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">نسيت كلمة المرور </label>
          <input
            placeholder="ادخل الايميل..."
            type="text"
            value={email}
            className="user-input my-3 text-center mx-auto"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn-login mx-auto mt-4" onClick={onSubmit}>
            ارسال الكود
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ForgetPasswordPage;
