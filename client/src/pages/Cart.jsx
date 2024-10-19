import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.iMstore.productData);
  const userInfo = useSelector((state) => state.iMstore.userInfo);

  const [totalAmount, setTotalAmount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    const calculatedTotal = price.toFixed(2);
    const calculatedShipping = (calculatedTotal * 0.1).toFixed(2);
    setTotalAmount(calculatedTotal);
    setShipping(calculatedShipping);
  }, [productData]);

  const finalTotal = (parseFloat(totalAmount) + parseFloat(shipping)).toFixed(
    2
  );

  const handleCheckout = () => {
    if (userInfo) setPayNow(true);
    else toast.error("Please Sign In to Checkout");
  };

  const payment = async (token) => {
    await axios.post("http://localhost:4242/pay", {
      amount: totalAmount * 100,
      token: token,
    });
  };

  return (
    <section>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />

      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-10 sm:py-20 flex flex-col lg:flex-row">
          <CartItems />
          <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4 mt-8 lg:mt-0">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">Cart Total</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmount}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping <span className="font-light text-lg">${shipping}</span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${finalTotal}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed to Checkout
            </button>

            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey={import.meta.env.VITE_STRIPE_PAYMENT_KEY}
                  name="iM Store"
                  amount={totalAmount * 100}
                  label="Pay to iM Store"
                  description={`Your Payment amount is $${totalAmount}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center px-4">
          <p className="text-xl text-[#ff9e01] font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shop and add products to Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              Choose New Product
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
