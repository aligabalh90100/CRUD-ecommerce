import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Util/SearchCountResult";
import { Container } from "react-bootstrap";
import SideFilter from "../../Components/Util/SideFilter";
import { Row, Col } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Util/Pagination";
import ViewHomeProducts from "../../logicHook/product/ViewHomeProducts";

const ShopProductsPage = () => {
  const { items, setPage } = ViewHomeProducts();
  let pageCount = 0;
  if (items.paginationResult) {
    pageCount = items.paginationResult.numberOfPages;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          title={` ${items.results ? items.results : ""} نتيجة`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer title="" products={items.data} />
          </Col>
        </Row>
        <Pagination onPress={setPage} pageCount={pageCount} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
