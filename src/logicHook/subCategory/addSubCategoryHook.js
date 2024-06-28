import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createSubCategory } from "../../redux/actions/subCategoryAction";
import notify from "../Notify";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.subCategory.subCategory);
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const category = useSelector((state) => state.allCategory.category);
  const handleSubmit = async () => {
    if (id === "0") {
      notify("من فضلك اختر التصنيف الرئيسى", "warn");
      return;
    }
    if (name.length < 3) {
      notify("من فضلك ادخل تصنيف فرعى لا يقل عن ثلاث احرف", "warn");
      return;
    }

    await dispatch(createSubCategory({ name, category: id }));

    setLoading(false);
  };
  useEffect(() => {
    if (!loading) {
      setName("");
      setId("0");
      if (res.status === 201) {
        notify("تم الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكلة فى الاضافة", "erroe");
      }
      setLoading(true);
    }
  }, [loading, res]);
  return { name, setName, handleSubmit, handleChange, category, id };
};
export default AddSubCategoryHook;
