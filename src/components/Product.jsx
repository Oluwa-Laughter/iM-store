import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  console.log(details);
  return (
    <section>
      <article className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
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
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">{details.title}</h2>

            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">
                ${Number(Math.round(details.price)) + 20}
              </p>

              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
            <div className="flex items-center gap-2 text-base">
              <div className="flex text-base text-yellow-500">
                {details.rating &&
                  details.rating.rate &&
                  Array.from(
                    { length: Math.round(details.rating.rate) },
                    (_, i) => <MdOutlineStar key={i} />
                  )}
              </div>
              <p className="text-xs text-gray-500">
                {details.rating.count} Customers Reviews
              </p>
            </div>
          </div>

          <p className="text-base text-gray-500 mt-3">{details.description}</p>

          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>{}</span>
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>

            <button className=" rounded-md bg-black text-white py-3 px-6 active:bg-gray-800 ">
              Add to Cart
            </button>
          </div>

          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category} </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Product;
