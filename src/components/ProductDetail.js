import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  return (
    <div className="container mt-4">

      <h2>{product.title}</h2>

      <img src={product.image} width="200" alt="" />

      <p>{product.description}</p>

      <h4>${product.price}</h4>

      <button
        className="btn btn-success"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductDetail;