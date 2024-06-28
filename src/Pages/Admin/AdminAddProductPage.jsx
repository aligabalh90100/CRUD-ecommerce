import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddProduct from "../../Components/Admin/AdminAddProduct";

const AdminAddProductPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAddProduct />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAddProductPage;
