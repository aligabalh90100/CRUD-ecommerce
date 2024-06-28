import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productActions";

const HomeProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { allProducts } = useSelector((state) => state.allProducts);
  let items = [];

  if (allProducts.data) {
    items = allProducts.data.slice(0, 4);
  }
  return { items };
};

export default HomeProducts;
