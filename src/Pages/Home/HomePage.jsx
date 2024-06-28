import React from "react";

import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import HomeProducts from "../../logicHook/product/HomeProducts";

const HomePage = () => {
  const { items } = HomeProducts();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        products={items}
      />
      <DiscountSection />
      <CardProductsContainer
        title="احدث الازياء"
        btntitle="المزيد"
        products={items}
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
