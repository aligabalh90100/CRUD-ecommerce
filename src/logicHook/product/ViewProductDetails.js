import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getSimilarProducts,
} from "../../redux/actions/productActions";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductDetails = (Id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(Id));
  }, [Id, dispatch]);
  const { oneProduct } = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (oneProduct.data) {
      dispatch(getOneCategory(oneProduct.data.category));
      dispatch(getSimilarProducts(oneProduct.data.category));
      dispatch(getOneBrand(oneProduct.data.brand));
    }
  }, [oneProduct.data, dispatch]);

  const { oneCategory } = useSelector((state) => state.allCategory);
  const { oneBrand } = useSelector((state) => state.allBrand);
  const { similarProducts } = useSelector((state) => state.allProducts);

  return { oneProduct, oneCategory, oneBrand, similarProducts };
};

export default ViewProductDetails;
