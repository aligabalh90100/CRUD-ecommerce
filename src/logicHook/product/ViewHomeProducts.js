import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductSearch,
  getAllProducts,
} from "../../redux/actions/productActions";

const limit = 12;
const ViewHomeProducts = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const getProduct = async () => {
    let word = "";
    if (localStorage.getItem("searchKeyword")) {
      word = localStorage.getItem("searchKeyword");
    }
    let queryCat = "";
    if (localStorage.getItem("catChecked")) {
      queryCat = localStorage.getItem("catChecked");
    }
    let queryBrand = "";
    if (localStorage.getItem("brandChecked")) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    let sort = "";
    let sortType = "";
    if (localStorage.getItem("sortType")) {
      sortType = localStorage.getItem("sortType");
    }
    if (sortType === "السعر من الاقل للاعلى") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلى للاقل") {
      sort = "-price";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "+qunatity";
    } else {
      sort = "";
    }
    let minPrice = "";
    let maxPrice = "";
    if (localStorage.getItem("priceFrom")) {
      minPrice = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo")) {
      maxPrice = localStorage.getItem("priceTo");
    }
    let priceToString = "";
    let priceFromString = "";
    if (minPrice === "" || !minPrice) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${minPrice}`;
    }
    if (maxPrice === "" || !maxPrice) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${maxPrice}`;
    }
    await dispatch(
      getAllProductSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceToString}${priceFromString}`
      )
    );
  };
  useEffect(() => {
    getProduct("");
  }, [page]);

  const { allProducts } = useSelector((state) => state.allProducts);
  let items = [];

  if (allProducts.data) {
    items = allProducts;
  }
  // localStorage.setItem("sortType", "بدون ترتيب");
  // localStorage.setItem("sortType", "الاكثر مبيعا");
  // localStorage.setItem("sortType", "الاعلى تقييما");
  // localStorage.setItem("sortType", "السعر من الاقل للاعلى");
  // localStorage.setItem("sortType", "السعر من الاعلى للاقل");

  return { items, page, setPage, getProduct };
};

export default ViewHomeProducts;
