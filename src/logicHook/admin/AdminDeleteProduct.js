import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productActions";

const AdminDeleteProduct = (id) => {
  const dispatch = useDispatch();

  dispatch(deleteProduct(id));
};

export default AdminDeleteProduct;
