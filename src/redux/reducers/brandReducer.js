import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../type";
const initialState = { brand: [], oneBrand: [], loading: true };

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        loading: false,
        brand: action.payload,
      };
    case CREATE_BRAND:
      return {
        loading: false,
        brand: action.payload,
      };
    case GET_ONE_BRAND:
      return {
        ...state,
        loading: false,
        oneBrand: action.payload,
      };
    case GET_ERROR:
      return {
        loading: false,
        brand: action.payload,
      };
    default:
      return state;
  }
};

export default brandReducer;
