import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../Api/baseURL";
import {
  createProduct,
  getOneProduct,
  updataProduct,
} from "../../redux/actions/productActions";
import notify from "../Notify";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";

const AdminEditProductHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    }
    getData();
  }, []);
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  useEffect(() => {
    async function getProduct() {
      await dispatch(getOneProduct(id));
    }
    getProduct();
  }, [id]);
  const { oneProduct } = useSelector((state) => state.allProducts);

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
  const [availableColors, setAvailabeColors] = useState([]);

  useEffect(() => {
    if (oneProduct.data) {
      setProdName(oneProduct.data.title);
      setProdDescription(oneProduct.data.description);
      setPriceBefore(oneProduct.data.price);
      setQty(oneProduct.data.quantity);
      setCatId(oneProduct.data.category);
      setBrandId(oneProduct.data.brand);
      setAvailabeColors(oneProduct.data.availableColors);
      setImages(oneProduct.data.images);
    }
  }, [oneProduct]);

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
  // convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };
  // submit
  const handleSubmit = async () => {
    let imgCover = "";
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
    if (images[0].length <= 1000) {
      // conver url to base 64
      convertURLtoFile(images[0]).then((val) => console.log(val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    console.log("here");
    const fd = new FormData();
    // Validation;
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
    await dispatch(updataProduct(id, fd));
    console.log("here 2");
    setLoading(false);
  };
  // notify message
  const { updateProduct } = useSelector((state) => state.allProducts);

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
      if (updateProduct.status === 200) {
        notify("تم التعديل المنتج", "success");
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
    brandId,
  };
};
export default AdminEditProductHook;
