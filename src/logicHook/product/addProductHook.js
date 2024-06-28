import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../Api/baseURL";
import { createProduct } from "../../redux/actions/productActions";
import notify from "../Notify";

const AddProductHook = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    async function getCat() {
      const response = await baseUrl("/api/v1/categories");
      setCategory(response.data.data);
    }
    getCat();
  }, []);
  useEffect(() => {
    async function getCat() {
      const response = await baseUrl("/api/v1/brands");
      setBrand(response.data.data);
    }
    getCat();
  }, []);

  const [images, setImages] = useState({});
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [catId, setCatId] = useState("0");
  const [brandId, setBrandId] = useState("0");
  const [subCatID, setSubCatId] = useState([]);
  const [seclectedSubID, setSelectedSubID] = useState([]);
  const [loading, setLoading] = useState(true);
  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const onSelectCategory = (e) => {
    setCatId(e.target.value);
  };
  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };

  // color picker
  const [show, setShow] = useState(false);
  const [availableColors, setAvailabeColors] = useState([]);
  const toggleColorPicker = () => {
    setShow((prev) => !prev);
  };

  const handleChangeColor = (color) => {
    setAvailabeColors((prevState) => {
      return [...prevState, color.hex];
    });
    setShow(false);
  };
  const removeColor = (removedColor) => {
    const decide = window.confirm(
      "Are you sure you want to delete this color?"
    );
    if (decide) {
      setAvailabeColors((prevState) => {
        const updatedState = prevState.filter(
          (color) => color !== removedColor
        );
        return updatedState;
      });
    }
  };
  // getting subCategories
  useEffect(() => {
    async function getAllSubCategoryies() {
      const response = await baseUrl.get(
        `/api/v1/categories/${catId}/subcategories`
      );

      setSubCatId(response.data.data);
    }
    if (catId.length > 1) {
      getAllSubCategoryies();
    }
  }, [catId]);
  let options = [];
  if (subCatID.length > 0) {
    for (let group of subCatID) {
      options.push(group);
    }
  }
  if (catId === "0") {
    options = [];
  }
  // to conver image to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  // submit
  const handleSubmit = async () => {
    if (
      prodName === "" ||
      prodDescription === "" ||
      images.length === 0 ||
      priceBefore === 0 ||
      catId === "0"
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    if (Number(priceAfter) > Number(priceBefore)) {
      notify("رجاء تعديل بيانات السعر", "warn");
      return;
    }
    const fd = new FormData();
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    // Validation
    // const allImages = Array.from(Array(Object.keys(images).length).keys()).map(
    //   (item, index) => dataURLtoFile(images[index], Math.random() + ".png")
    // );
    const newImages = Object.values(images);
    const allImages = newImages.map((item) =>
      dataURLtoFile(item, Math.random() + ".png")
    );

    fd.append("title", prodName);
    fd.append("description", prodDescription);
    fd.append("quantity", qty);
    fd.append("price", priceBefore);
    fd.append("imageCover", imgCover);

    allImages.map((item) => fd.append("images", item));
    fd.append("category", catId);
    fd.append("brand", brandId);
    fd.append("availableColors", availableColors);

    const subCat = seclectedSubID.map((item) => item._id);

    fd.append("subcategory", subCat);
    setLoading(true);
    await dispatch(createProduct(fd));
    setLoading(false);
  };
  // notify message
  const { products } = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (loading === false) {
      setCatId("0");
      setAvailabeColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceAfter("السعر بعد الخصم");
      setPriceBefore("السعر قبل الخصم");
      setQty("الكمية المتاحة");
      setBrandId("");
      setSelectedSubID([]);
      setTimeout(() => {
        setLoading(true);
      }, 1500);
      if (products.status === 200) {
        notify("تم اضافة المنتج", "success");
      } else {
        notify("هناك مشكلة", "error");
      }
    }
  }, [loading]);

  return {
    images,
    setImages,
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    qty,
    setQty,
    onSelectCategory,
    catId,
    category,
    options,
    onSelect,
    onRemove,
    onSelectBrand,
    brand,
    availableColors,
    removeColor,
    toggleColorPicker,
    show,
    handleChangeColor,
    handleSubmit,
  };
};
export default AddProductHook;
