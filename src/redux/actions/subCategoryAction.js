import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

export const createSubCategory = (data) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertData(`/api/v1/subcategories`, data);

    dispatch({ type: CREATE_SUB_CATEGORY, payload: response });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Error" + error });
  }
};
