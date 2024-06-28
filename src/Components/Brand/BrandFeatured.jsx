import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Util/SubTitle";
import Spinner from "react-bootstrap/Spinner";

import HomeBrandHook from "../../logicHook/brand/HomeBrandHook";

const BrandFeatured = ({ title, btntitle }) => {
  const { brand, loading } = HomeBrandHook();

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading && (
          <Row className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        )}

        {brand.data &&
          brand.data
            .slice(0, 6)
            .map((item, i) => <BrandCard key={i} img={item.image} />)}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
