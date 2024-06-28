import { Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import { ToastContainer } from "react-toastify";
import AddBrandHook from "../../logicHook/brand/addBrandHook";
const AdminAddBrand = () => {
  const {
    onImageChange,
    img,
    name,
    setName,
    press,
    loading,
    handleSubmit,
    error,
  } = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt=""
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col
          sm="8"
          className="d-flex justify-content-end align-items-center gap-2"
        >
          {press
            ? loading && <Spinner animation="border" variant="primary" />
            : null}
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminAddBrand;
