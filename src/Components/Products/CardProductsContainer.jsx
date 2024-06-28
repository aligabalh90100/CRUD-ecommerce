import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Util/SubTitle";

const CardProductsContainer = ({ title, btntitle, products }) => {
  return (
    <Container>
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText="products" />
      ) : null}
      <Row className="my-2 d-flex justify-content-start">
        {products
          ? products.map((item) => (
              <ProductCard
                key={item._id}
                imageCover={item.imageCover}
                title={item.title}
                id={item._id}
                price={item.price}
                ratingsQuantity={item.ratingsQuantity}
              />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
