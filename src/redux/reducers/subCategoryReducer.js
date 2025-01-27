import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";
const initial = { subCategory: [], loading: true };
const subCategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
