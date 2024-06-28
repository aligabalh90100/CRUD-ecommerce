import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../Assests/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetails from "../../logicHook/product/ViewProductDetails";

const ProductGallery = () => {
  const { Id } = useParams();
  const { oneProduct } = ViewProductDetails(Id);
  let images = [];

  if (oneProduct.data) {
    if (oneProduct.data.images.length === 0) {
      images = [{ original: `${mobile}` }];
    } else {
      const showImages = oneProduct.data.images;
      showImages.map((img) => images.push({ original: img }));
    }
  }
  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderLeftNav={LeftButton}
        renderRightNav={RightButton}
        autoPlay={true}
      />
    </div>
  );
};

export default ProductGallery;
