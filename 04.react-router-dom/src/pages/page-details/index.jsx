import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import"./index.scss"
const ProductDetails = () => {
  //   const params = useParams();
  const { id } = useParams();
  const nav = useNavigate();
  console.log(id);
  return (
    <div id="product-details">
      <div className="container">
        <div className="product-details">
          <h1> ProductDetails</h1>
          <button onClick={() => nav("/products")}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
