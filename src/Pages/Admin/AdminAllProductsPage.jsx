import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Util/Pagination";
import AdminGetProducts from "../../logicHook/admin/AdminGetProducts";
import { useSelector } from "react-redux";

const AdminAllProductsPage = () => {
  const { items, onPress } = AdminGetProducts();

  let pageCount = 0;
  if (items.paginationResult) {
    pageCount = items.paginationResult.numberOfPages;
  }

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts products={items} />
          <Pagination pageCount={pageCount} onPress={onPress} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
