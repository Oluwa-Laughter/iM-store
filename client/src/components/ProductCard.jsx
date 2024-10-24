import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/iMstoreSlice";
import { toast, ToastContainer } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const id = item.title;
  const idString = (id) => id.toString().toLowerCase().split(" ").join("");
  const rootId = idString(id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, { state: { item: item } });
  };
  return (
    <article className="group w-full relative">
      <div
        onClick={handleDetails}
        className="w-full h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer"
      >
        <img
          src={item.image}
          alt="itemImg"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {item.title.substring(0, 15)}
            </h2>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">
                ${Number(Math.round(item.price)) + 20}
              </p>
              <p className="font-semibold">${item.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                    description: item.description,
                    category: item.category,
                    rating: item.rating,
                  })
                ) && toast.success(`You added ${item.title}to cart`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              Add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="first-letter:capitalize">{item.category}</p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
          Sale
        </p>
      </div>

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
    </article>
  );
};

export default ProductCard;
