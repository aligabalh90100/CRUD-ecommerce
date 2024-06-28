import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewHomeProducts from "../product/ViewHomeProducts";

const SidebarSearchHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    }
    getData();
  }, []);
  const { getProduct } = ViewHomeProducts();
  const { category } = useSelector((state) => state.allCategory);
  const { brand } = useSelector((state) => state.allBrand);
  // filters
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const chooseCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCategoryChecked([]);
    } else {
      if (e.target.checked) {
        setCategoryChecked((preState) => [...preState, value]);
      } else if (!e.target.checked) {
        setCategoryChecked((prevState) => {
          const updatedState = prevState.filter((val) => val !== value);
          return updatedState;
        });
      }
    }
  };

  const chooseBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked) {
        setBrandChecked((preState) => [...preState, value]);
      } else if (!e.target.checked) {
        setBrandChecked((prevState) => {
          const updatedState = prevState.filter((val) => val !== value);
          return updatedState;
        });
      }
    }
  };
  const timer = useRef();
  // category query
  let categoryUrl = categoryChecked
    .map((val) => "category[in][]=" + val)
    .join("&");
  localStorage.setItem("catChecked", categoryUrl);
  // brand query
  let brandUrl = brandChecked.map((val) => "brand[in][]=" + val).join("&");
  localStorage.setItem("brandChecked", brandUrl);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      getProduct();
    }, 400);
  }, [categoryUrl, brandUrl, minPrice, maxPrice]);
  function priceFrom(e) {
    console.log(e.target.value);
    localStorage.setItem("priceFrom", e.target.value);
    setMinPrice(e.target.value);
  }
  function priceTo(e) {
    localStorage.setItem("priceTo", e.target.value);
    setMaxPrice(e.target.value);
  }
  return { category, brand, chooseCategory, chooseBrand, priceFrom, priceTo };
};

export default SidebarSearchHook;
