import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">

        {products.map(product => (

          <div className="col-md-3" key={product.id}>

            <div className="card mb-4">

              <img
                src={product.image}
                alt={product.title}
                height="200"
                className="card-img-top"
              />

              <div className="card-body">

                <h6>{product.title.substring(0,30)}</h6>

                <p>${product.price}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default ProductList;