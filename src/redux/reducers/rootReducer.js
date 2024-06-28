import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import subCategoryReducer from "./subCategoryReducer";
import brandReducer from "./brandReducer";
import productsReducer from "./productReducer";
import authReducer from "./authReducer";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subCategoryReducer,
  allProducts: productsReducer,
  authReducer: authReducer,
});
