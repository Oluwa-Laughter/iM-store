import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/iMstoreSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.iMstore.productData);
  return (
    <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6"
              >
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <MdOutlineClose
                    onClick={() =>
                      dispatch(deleteItem(item.id)) &&
                      toast.info(`${item.title} is removed`)
                    }
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <h2 className="hidden md:block w-52 text-base">{item.title}</h2>
                <p className="w-full md:w-24 text-sm md:text-base">
                  ${item.price}
                </p>
                <div className="w-full md:w-52 flex items-center justify-between text-gray-500 gap-2 md:gap-4 border p-2 md:p-3">
                  <p className="text-xs md:text-sm">Quantity</p>
                  <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-base md:text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-base md:text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-full md:w-24 text-sm md:text-base">
                  ${item.quantity * item.price}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              dispatch(resetCart()) && toast.error("Your Cart is Empty!")
            }
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Choose More Product
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
