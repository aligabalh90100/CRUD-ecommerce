import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetails from "../../logicHook/product/ViewProductDetails";

const ProductText = () => {
  const { Id } = useParams();

  const { oneProduct, oneCategory, oneBrand } = ViewProductDetails(Id);

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">
          {oneCategory.data ? oneCategory.data.name : null}:
        </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {oneProduct.data ? oneProduct.data.title : ""}
            <div className="cat-rate d-inline mx-3">
              {oneProduct.data && oneProduct.data.ratingsQuantity}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">
            {oneBrand.data && oneBrand.data.name}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {oneProduct.data &&
            oneProduct.data.availableColors.map((color, i) => (
              <div
                key={i}
                className="color ms-2 border"
                style={{ backgroundColor: color }}
              ></div>
            ))}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {oneProduct.data && oneProduct.data.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {oneProduct.data && oneProduct.data.price} جنية
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
