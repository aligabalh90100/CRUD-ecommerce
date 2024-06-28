import React from "react";
import AdminProductsCard from "./AdminProductsCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جمبيع المنتجات</div>
      <Row>
        {products.data &&
          products.data.map((prod) => (
            <AdminProductsCard key={prod._id} product={prod} />
          ))}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
