import { deleteProduct } from "../actions/productActions";
import {
  CREATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  GET_SIMILAR_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../type";
const initial = {
  products: [],
  allProducts: [],
  oneProduct: [],
  similarProducts: [],
  deleteProduct: [],
  loading: true,
  updateProduct: [],
};
const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,

        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
