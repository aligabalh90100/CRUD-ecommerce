import { useEffect } from "react";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
const categoryAmount = 50;
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(categoryAmount));
  }, [dispatch]);
  const data = useSelector((state) => state.allCategory);

  let pageCount = 0;

  if (data.category.paginationResult) {
    pageCount = data.category.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    dispatch(getAllCategoryPage(categoryAmount, page));
  };
  return { data, pageCount, getPage };
};
export default AllCategoryPageHook;
