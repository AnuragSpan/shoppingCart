import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlices";
import { Link } from "react-router-dom";
import { productDetails } from "../slices/detailsSlice";
import Footer from "./Footer";
import NotFound from "./NotFound";

const Home = () => {
  const { data, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    dispatch(addToCart(product));
    e.stopPropagation();
  };

  // const handleProductDetails = (products) => {
  //   dispatch(productDetails(products));
  // };

  return (
    <>
      <div className="home-container">
        {status === "pending" ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : status === "rejected" ? (
          <NotFound />
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className="products">
              {data.map((product) => {
                return (
                  <div className="product" key={product.id}>
                    <Link to={`details/${product.id}`}>
                      <div className="product-list">
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
