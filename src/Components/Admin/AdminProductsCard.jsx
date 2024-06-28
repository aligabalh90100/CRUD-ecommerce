import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { adminDeleteProduct } from "../../redux/actions/productActions";

const AdminProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function handleDelete() {
    await dispatch(adminDeleteProduct(product._id));
    setShow(false);
    window.location.reload();
  }
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="font">
          <Modal.Title>تاكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font">
          العناصر المحذوفة لا يمكن استعادتها مرة اخرى
        </Modal.Body>
        <Modal.Footer className="font">
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="dark" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={handleShow}>
              ازاله
            </div>
            <Link to={`/admin/editproduct/${product._id}`}>
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product && product.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product && product.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">4.5</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{product && product.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminProductsCard;
