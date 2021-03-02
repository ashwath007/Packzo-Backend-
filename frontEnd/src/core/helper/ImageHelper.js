import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  console.log(product)
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="rounded">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "20vh", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
      
    </div>
  );
};

export default ImageHelper;
