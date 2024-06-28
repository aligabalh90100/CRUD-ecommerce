import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
} from "../type";

import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

// get all category
export const getAllCategory =
  (limit = 50) =>
  async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");
      const response = await useGetData(`/api/v1/categories?limit=${limit}`);

      dispatch({ type: GET_ALL_CATEGORY, payload: response });
    } catch (error) {
      dispatch({ type: GET_ERROR, payload: "Error" + error });
    }
  };
// get oneCategory
export const getOneCategory = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/categories/${id}`);

    dispatch({ type: GET_ONE_CATEGORY, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};

// // get all category with page
export const getAllCategoryPage =
  (limit = 50, page) =>
  async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");
      const response = await useGetData(
        `/api/v1/categories?limit=${limit}&page=${page}`
      );

      dispatch({ type: GET_ALL_CATEGORY, payload: response });
    } catch (error) {
      dispatch({ type: GET_ERROR, payload: "Error" + error });
    }
  };

// add new category
export const createCategory = (formData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertDataWithImage(
      `/api/v1/categories`,
      formData
    );

    dispatch({ type: CREATE_CATEGORY, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
