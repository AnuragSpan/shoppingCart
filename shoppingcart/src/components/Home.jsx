import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlices";
import { Link, useNavigate } from "react-router-dom";
import { productDetails } from "../slices/detailsSlice";
import Footer from "./Footer";

const Home = () => {
  const { data, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e, product) => {
    dispatch(addToCart(product));
    navigate("/cart");
    e.stopPropagation();
  };

  const handleProductDetails = (products) => {
    return dispatch(productDetails(products));
  };

  return (
    <>
      <div className="home-container">
        {status === "pending" ? (
          <p>Loading....</p>
        ) : status === "rejected" ? (
          <p>An Error Occured</p>
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className="products">
              {data.map((product) => {
                return (
                  <div className="product" key={product.id}>
                    <Link to={`details/${product.id}`}>
                      <div
                        onClick={() => handleProductDetails(product)}
                        className="product-list"
                      >
                        <h3>
                          {product.title.length > 20
                            ? `${product.title.slice(0, 15)}...`
                            : product.title}
                        </h3>

                        <img src={product.image} alt={product.title} />

                        <span>
                          {product.description.length > 50
                            ? `${product.description.slice(0, 40)}...`
                            : product.description}
                          <span className="price">
                            ${Math.floor(product.price)}
                          </span>
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="addCart"
                    >
                      Add To Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
