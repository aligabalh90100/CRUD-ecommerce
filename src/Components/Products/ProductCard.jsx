import { Card, Col } from "react-bootstrap";

import favoff from "../../Assests/fav-off.png";
import rate from "../../Assests/rate.png";
import { Link } from "react-router-dom";
const ProductCard = ({ imageCover, title, price, ratingsQuantity, id }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to={`/products/${id}`}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={imageCover}
          />
        </Link>

        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{ratingsQuantity}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">{price}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
