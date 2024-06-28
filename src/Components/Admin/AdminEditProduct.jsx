import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import { CompactPicker } from "react-color";
import add from "../../Assests/add.png";
import MultiImageInput from "react-multiple-image-input";

import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import AdminEditProductHook from "../../logicHook/product/AdminEditProductHook";

const crop = {
  unit: "%",
  aspect: 4 / 3,
  width: "100",
};

const AdminEditProduct = () => {
  const { id } = useParams();
  const {
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
  } = AdminEditProductHook(id);
  // console.log(category, brand);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">تعديل المنتج: {prodName}</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            max={4}
            theme={{ backgroundColor: "#fff", outlineColor: "gray" }}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={(e) => setPriceBefore(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر بعد الخصم"
            value={priceAfter}
            onChange={(e) => setPriceAfter(e.target.value)}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكمية المتاحة"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <select
            name="cat"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
            value={catId}
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data &&
              category.data.length > 0 &&
              category.data.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            value={brandId}
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectBrand}
          >
            <option value="0">اختر ماركة</option>
            {brand.data &&
              brand.data.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {availableColors.map((opt, i) => (
              <div
                key={i}
                className="color ms-2 border  mt-1"
                style={{ backgroundColor: opt }}
                onClick={() => removeColor(opt)}
              ></div>
            ))}
            <div style={{ position: "relative" }}>
              <img
                src={add}
                alt=""
                width="30px"
                height="35px"
                style={{ cursor: "pointer" }}
                onClick={toggleColorPicker}
              />
              {show && (
                <div
                  style={{
                    position: "absolute",
                  }}
                >
                  <CompactPicker onChangeComplete={handleChangeColor} />
                </div>
              )}
            </div>
          </div>
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

export default AdminEditProduct;
