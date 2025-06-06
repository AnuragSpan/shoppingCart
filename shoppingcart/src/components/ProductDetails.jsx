import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productDetails } from "../slices/detailsSlice";

const ProductDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.details);

  const {
    image,
    title,
    category,
    description,
    price,
    // rating: { rate, count },
  } = product.itemDetails;

  const fetchdetails = async () => {
    const details = await fetch(
      `https://fakestoreapi.com/products/${param.id}`
    );
    const res = await details.json();
    dispatch(productDetails(res));
  };

  useEffect(() => {
    fetchdetails();
    // const response = await details.json();
    // console.log(response);
    // dispatch(productDetails(response));
  }, []);

  return (
    <>
      <h1 className="product-title">Product Details</h1>
      <div className="product-details">
        <img src={image} alt={product?.title} />
        <h2>{`Title:${title}`}</h2>
        <h4>{`Category:${category}`}</h4>
        <p>{`Description:${description}`}</p>
        {/* <h3>
          Rating: {rate} ⭐ ({count} reviews)
        </h3> */}
        <h1>{`Price:$${price}`}</h1>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          <span>Start Shopping</span>
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;
