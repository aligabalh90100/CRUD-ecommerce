import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewProductDetails from "../../logicHook/product/ViewProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { Id } = useParams();
  const { similarProducts } = ViewProductDetails(Id);
  let prod = [];
  if (similarProducts.data) {
    if (similarProducts.data.length > 4) {
      prod = similarProducts.data.slice(0, 4);
    } else {
      prod = similarProducts.data.slice(0, similarProducts.data.length);
    }
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعحبك" products={prod} />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
