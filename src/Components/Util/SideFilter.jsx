import React from "react";
import { Row } from "react-bootstrap";
import SidebarSearchHook from "../../logicHook/search/SidebarSearchHook";

const SideFilter = () => {
  const { category, brand, chooseCategory, chooseBrand, priceFrom, priceTo } =
    SidebarSearchHook();

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>

          {category.data &&
            category.data.map((cat) => (
              <div className="d-flex mt-2" key={cat._id}>
                <input
                  onChange={chooseCategory}
                  type="checkbox"
                  value={cat._id}
                />
                <div className="filter-sub me-2 ">{cat.name}</div>
              </div>
            ))}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>

          {brand.data &&
            brand.data.map((brand) => (
              <div className="d-flex mt-2" key={brand._id}>
                <input
                  onChange={chooseBrand}
                  type="checkbox"
                  value={brand._id}
                />
                <div className="filter-sub me-2 ">{brand.name}</div>
              </div>
            ))}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "80px", height: "25px" }}
            value={localStorage.getItem("priceFrom")}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={priceTo}
            value={localStorage.getItem("priceTo")}
            className="m-2 text-center"
            type="number"
            style={{ width: "80px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
