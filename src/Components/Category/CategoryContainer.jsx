import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import Spinner from "react-bootstrap/Spinner";

const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#0034ff", "#ffd3e8"];
const CategoryContainer = ({ data }) => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-start">
        <div className="admin-content-text mt-2">كل التصنيفات</div>
        {data.loading ? (
          <Spinner
            style={{ justifyContent: "center" }}
            animation="border"
            variant="primary"
          />
        ) : data.category ? (
          data.category.data.map((result, i) => (
            <CategoryCard
              key={i}
              title={result.name}
              img={result.image}
              background={colors[Math.floor(Math.random() * colors.length)]}
            />
          ))
        ) : (
          <p>لا يوجد تصنيفات</p>
        )}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
