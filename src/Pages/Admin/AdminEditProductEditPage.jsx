import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditProduct from "../../Components/Admin/AdminEditProduct";

const AdminEditProductEditPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminEditProduct />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminEditProductEditPage;
