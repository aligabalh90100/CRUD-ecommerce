import { Row, Col } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../logicHook/subCategory/addSubCategoryHook";
import { useEffect, useState } from "react";

import baseUrl from "../../Api/baseURL";

const AdminAddSubCategory = () => {
  const [optionData, setOptionData] = useState([]);
  const { name, setName, handleSubmit, handleChange, id } =
    AddSubCategoryHook();
  useEffect(() => {
    async function getData() {
      const response = await baseUrl.get("/api/v1/categories");
      setOptionData(response.data.data);
    }
    getData();
  }, []);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChange}
            value={id}
          >
            <option value="0"> اختر تصنيف رئيسى</option>
            {optionData.length > 0 &&
              optionData.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
