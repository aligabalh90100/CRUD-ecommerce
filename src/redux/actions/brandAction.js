import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR, GET_ONE_BRAND } from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
export const getAllBrand = (limit = 50) => {
  return async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/brands?limit=${limit}`);
      dispatch({ type: GET_ALL_BRAND, payload: response });
    } catch (error) {
      dispatch({ type: GET_ERROR, payload: "Error" + error });
    }
  };
};
// get all category with brand
export const getAllBrandPage =
  (limit = 50, page) =>
  async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");
      const response = await useGetData(
        `/api/v1/brands?limit=${limit}&page=${page}`
      );

      dispatch({ type: GET_ALL_BRAND, payload: response });
    } catch (error) {
      dispatch({ type: GET_ERROR, payload: "Error" + error });
    }
  };

//add new brand
export const createBrand = (formData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertDataWithImage(`/api/v1/brands`, formData);

    dispatch({ type: CREATE_BRAND, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};

//get one brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/brands/${id}`);

    dispatch({ type: GET_ONE_BRAND, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
