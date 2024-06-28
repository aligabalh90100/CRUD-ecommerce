import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";

const AllBrandPageHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(12));
  }, [dispatch]);
  const { brand, loading } = useSelector((state) => state.allBrand);
  let pageCount = 0;

  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    dispatch(getAllBrandPage(12, page));
  };
  return {
    brand,
    loading,
    getPage,
    pageCount,
  };
};
export default AllBrandPageHook;
