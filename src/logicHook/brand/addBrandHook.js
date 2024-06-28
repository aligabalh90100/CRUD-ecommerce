import { useState, useEffect } from "react";
import avatar from "../../Assests/avatar.png";
import { useDispatch, useSelector } from "react-redux";

import notify from "../Notify";
import { createBrand } from "../../redux/actions/brandAction";

const AddBrandHook = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allBrand.brand);
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [error, setError] = useState(false);

  const onImageChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (event) => {
    if (name === "" || !selectedFile) {
      setError("Inavlid data");
      notify("بيانات غير صالحة", "warn");
      return;
    }
    setError(false);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);

      setPress(false);
      if (res.status === 201) {
        notify("تم الاضافة بنجاح", "success");
      } else {
        notify("بيانات غير صالحة", "error");
      }
    }
  }, [loading, res.status]);

  return {
    onImageChange,
    img,
    name,
    setName,
    press,
    loading,
    handleSubmit,
    error,
  };
};
export default AddBrandHook;
