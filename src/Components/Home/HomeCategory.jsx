import { Container, Row } from "react-bootstrap";
import SubTitle from "../Util/SubTitle";
import CategoryCard from "../Category/CategoryCard";

import Spinner from "react-bootstrap/Spinner";

import HomeCategoryHook from "../../logicHook/category/homeCategoryHook";
const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#0034ff", "#ffd3e8"];
const HomeCategory = () => {
  const { data } = HomeCategoryHook();

  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="allcategory" />
      <Row className="my-2 d-flex justify-content-start">
        {data.loading ? (
          <Row className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        ) : data.category ? (
          data.category.data
            .slice(0, 6)
            .map((result, i) => (
              <CategoryCard
                key={i}
                title={result.name}
                img={result.image}
                background={colors[i]}
              />
            ))
        ) : (
          <p>لا يوجد تصنيفات</p>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
