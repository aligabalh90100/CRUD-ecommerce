import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/brandAction";
import { useDispatch, useSelector } from "react-redux";

const HomeBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(10));
  }, [dispatch]);
  const { brand, loading } = useSelector((state) => state.allBrand);

  return { brand, loading };
};
export default HomeBrandHook;
