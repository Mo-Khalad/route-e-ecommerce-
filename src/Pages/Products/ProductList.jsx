import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Store/WishlistContext";

const ProductList = ({ products, loading }) => {
  const { addProductToCart } = useContext(CartContext);
  const { addToWishlist, removeToWishlist, wishlistProduct } =
    useContext(WishlistContext);
  return (
    <div className="d-flex flex-wrap justify-content-around p-5 align-items-center">
      {products !== undefined &&
        products.length !== 0 &&
        products.map((product) => (
          <Col lg={4} md={6} sm={8} xs={9} className="my-5" key={product.id}>
            <div className="w-100">
              <div className="my-2 ms-5">
                <div
                  className={`${
                    loading ? "placeholder " : ""
                  }  product-layout d-flex flex-wrap justify-content-between align-items-center rounded-1`}
                >
                  <NavLink
                    className="p-1 Nav-Link"
                    to={`/products/${product.id}`}
                  >
                    <img
                      src={product.imageCover}
                      className="w-100 "
                      alt={product.title}
                      height={400}
                    />
                  </NavLink>
                  <h5 className="mx-3 mt-2">{product.category.name}</h5>
                  <p className="title ms-3">{product.title}</p>
                  <svg
                    onClick={() => {
                      const wishlist = wishlistProduct.findIndex(
                        (WishlistId) => WishlistId === product.id
                      );
                      wishlist === -1
                        ? addToWishlist(product.id, "added to wishlist")
                        : removeToWishlist(product.id, "remove to wishlist");
                    }}
                    stroke="currentColor"
                    fill={`${
                      wishlistProduct.findIndex(
                        (WishlistId) => WishlistId === product.id
                      ) === -1
                        ? "#000"
                        : "rgba(13, 202, 240, 1)"
                    }`}
                    version="1.1"
                    viewBox="0 0 512 512"
                    className="favorite-product sm:mr-4 mr-2 text-teal-500 me-3 text-dark pointer"
                    height="33"
                    width="33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                  </svg>
                  <h6 className="ms-3">${product.price} </h6>
                  <button
                    className="buyBtn py-1 mb-3 px-4 m-auto border-0 "
                    onClick={() => {
                      addProductToCart(product);
                    }}
                  >
                    buy
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
    </div>
  );
};

export default ProductList;
