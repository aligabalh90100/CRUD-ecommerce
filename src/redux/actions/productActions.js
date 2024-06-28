import DeleteData from "../../hooks/deleteData";
import { updateDataWithImage } from "../../hooks/editData";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ERROR,
  GET_PRODUCT,
  GET_SIMILAR_PRODUCTS,
  UPDATE_PRODUCT,
} from "../type";

export const createProduct = (data) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertDataWithImage(`/api/v1/products`, data);

    dispatch({ type: CREATE_PRODUCT, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// get all category
export const getAllProducts = (limit, pageNumber) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(
      `/api/v1/products?limit=${limit}&page=${pageNumber}`
    );

    dispatch({ type: GET_ALL_PRODUCTS, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// get one product
export const getOneProduct = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/products/${id}`);

    dispatch({ type: GET_PRODUCT, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// similarProducts
export const getSimilarProducts = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/products/?category=${id}`);

    dispatch({ type: GET_SIMILAR_PRODUCTS, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// similarProducts
export const adminDeleteProduct = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await DeleteData(`/api/v1/products/${id}`);

    dispatch({ type: DELETE_PRODUCT, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// similarProducts
export const updataProduct = (id, fd) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await updateDataWithImage(`/api/v1/products/${id}`, fd);

    dispatch({ type: UPDATE_PRODUCT, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
// get all products with query string
export const getAllProductSearch = (queryString) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/products?${queryString}`);

    dispatch({ type: GET_ALL_PRODUCTS, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
