import React, { useEffect, useState } from "react";
import UnopDropdown from "unop-react-dropdown";

import sort from "../../Assests/sort.png";
import ViewHomeProducts from "../../logicHook/product/ViewHomeProducts";
const SearchCountResult = ({ title }) => {
  const [selectedSearch, setSelectedSearch] = useState("ترتيب حسب ");
  const { getProduct } = ViewHomeProducts();
  useEffect(() => {
    getProduct();
  }, [selectedSearch]);
  const handler = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              {selectedSearch}
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => {
                setSelectedSearch("بدون ترتيب");
                localStorage.setItem("sortType", "بدون ترتيب");
              }}
              className="border-bottom card-filter-item"
            >
              بدون ترتيب
            </div>
            <div
              onClick={() => {
                setSelectedSearch("الاكثر مبيعا");
                localStorage.setItem("sortType", "الاكثر مبيعا");
              }}
              className="border-bottom card-filter-item"
            >
              الاكثر مبيعا
            </div>
            <div
              onClick={() => {
                setSelectedSearch(" الاعلى تقييما");
                localStorage.setItem("sortType", "الاعلى تقييما");
              }}
              className="border-bottom card-filter-item"
            >
              الاعلي تقييما
            </div>
            <div
              onClick={() => {
                setSelectedSearch("السعر من الاقل للاعلى");
                localStorage.setItem("sortType", "السعر من الاقل للاعلى");
              }}
              className="border-bottom card-filter-item"
            >
              السعر من الاقل للاعلي
            </div>
            <div
              onClick={() => {
                setSelectedSearch("السعر من الاعلى للاقل");
                localStorage.setItem("sortType", "السعر من الاعلى للاقل");
              }}
              className=" card-filter-item"
            >
              السعر من الاعلي للاقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
