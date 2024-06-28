import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productActions";

const AdminGetProducts = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(12, page));
  }, [page]);
  const { allProducts } = useSelector((state) => state.allProducts);
  let items = [];

  function onPress(num) {
    setPage(num);
  }

  if (allProducts.data) {
    items = allProducts;
  }
  return { items, onPress };
};

export default AdminGetProducts;
