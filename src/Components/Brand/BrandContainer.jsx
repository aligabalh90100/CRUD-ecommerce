import { Row, Container } from "react-bootstrap";
import BrandCard from "./BrandCard";

import Spinner from "react-bootstrap/Spinner";

const BrandContainer = ({ brand, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-start">
        {loading ? (
          <Row className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        ) : (
          brand.data.map((item, i) => <BrandCard key={i} img={item.image} />)
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
