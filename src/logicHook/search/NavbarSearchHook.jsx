import { useEffect, useRef, useState } from "react";
import ViewHomeProducts from "../product/ViewHomeProducts";

const NavbarSearchHook = () => {
  const time = useRef();
  const [searchWord, setSeachWord] = useState("");
  const { getProduct } = ViewHomeProducts();

  useEffect(() => {
    clearTimeout(time.current);
    time.current = setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return { setSeachWord, searchWord };
};

export default NavbarSearchHook;
