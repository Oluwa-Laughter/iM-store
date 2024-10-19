import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/iMstoreSlice";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
  const [details, setDetails] = useState({});
  const [baseQuantity, setBaseQuantity] = useState(1);

  const decreaseQuantity = () => {
    baseQuantity > 1 ? setBaseQuantity(baseQuantity - 1) : setBaseQuantity(1);
  };

  const increaseQuantity = () => {
    setBaseQuantity(baseQuantity + 1);
  };

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  return (
    <section>
      <article className="max-w-screen-xl mx-auto my-10 flex flex-col lg:flex-row gap-10 px-4">
        <div className="w-full lg:w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
              Sale
            </p>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col justify-center gap-8 lg:gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">{details.title}</h2>

            <div className="flex items-center gap-4">
              <p className="line-through font-base text-gray-500">
                ${Number(Math.round(details.price)) + 20}
              </p>

              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-base text-yellow-500">
                {details.rating &&
                  details.rating.rate &&
                  Array(Math.floor(details.rating.rate))
                    .fill(0)
                    .map((_, i) => <MdOutlineStar key={i} />)}
              </div>
              <p className="text-xs text-gray-500">
                {details.rating && details.rating.count} Customers Reviews
              </p>
            </div>
          </div>

          <p className="text-base text-gray-500 -mt-3 first-letter:capitalize ">
            {details.description}
          </p>

          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={decreaseQuantity}
                  className=" h-5 font-bold text-lg flex border items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  onClick={increaseQuantity}
                  className=" h-5 font-bold text-lg border flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: details.id,
                    title: details.title,
                    price: details.price,
                    image: details.image,
                    quantity: baseQuantity,
                    description: details.description,
                    category: details.category,
                    rating: details.rating,
                  })
                ) && toast.success(`${details.title} Added to cart`)
              }
              className=" rounded-md bg-black text-white py-3 px-6 active:bg-gray-800 "
            >
              Add to Cart
            </button>
          </div>

          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category} </span>
          </p>
        </div>
      </article>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Product;
