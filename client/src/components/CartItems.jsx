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
    <div className="w-full lg:w-2/3 px-4 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-titleFont text-3xl mb-8 text-gray-800">
          Your Shopping Cart
        </h2>
        <div className="space-y-6">
          {productData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <button
                  onClick={() => {
                    dispatch(deleteItem(item.id));
                    toast.info(`${item.title} is removed`);
                  }}
                  className="p-1 rounded-full hover:bg-red-100"
                >
                  <MdOutlineClose className="text-xl text-red-500" />
                </button>
                <img
                  className="w-24 h-24 object-cover rounded-md"
                  src={item.image}
                  alt={item.title}
                />
                <h3 className="md:hidden text-sm font-medium">{item.title}</h3>
              </div>

              <h3 className="hidden md:block w-1/4 text-base font-medium">
                {item.title}
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-2/5 gap-4 mt-4 md:mt-0">
                <div className="flex items-center justify-center border rounded-lg overflow-hidden">
                  <button
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
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium">{item.quantity}</span>
                  <button
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
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col items-center md:items-end">
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="font-semibold text-lg">
                    Total: ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <Link to="/">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <HiOutlineArrowLeft />
              Continue Shopping
            </button>
          </Link>

          <button
            onClick={() => {
              dispatch(resetCart());
              toast.error("Your Cart is Empty!");
            }}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>

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
