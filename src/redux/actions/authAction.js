import useGetData from "../../hooks/useGetData";
import { useCreateUser, useInsertData } from "../../hooks/useInsertData";
import {
  CREATE_USER,
  FORGET_PASSWORD,
  GET_CURRENT_USER,
  LOGIN_USER,
} from "../type";

export const createNewUser = (formData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useCreateUser(`/api/v1/auth/signup`, formData);

    dispatch({ type: CREATE_USER, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: CREATE_USER, payload: error.response });
  }
};

export const signInUser = (formData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useCreateUser(`/api/v1/auth/login`, formData);

    dispatch({ type: LOGIN_USER, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: LOGIN_USER, payload: error.response });
  }
};
export const getLoggedUser = (id) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useGetData(`/api/v1/users/${id}`);

    dispatch({ type: GET_CURRENT_USER, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER, payload: error.response });
  }
};
// forget password
export const forgetPasswordAction = (data) => async (dispatch) => {
  try {
    // const res = await baseUrl.get("/api/v1/categories");
    const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);

    dispatch({ type: FORGET_PASSWORD, payload: response, loading: true });
  } catch (error) {
    dispatch({ type: FORGET_PASSWORD, payload: error.response });
  }
};
