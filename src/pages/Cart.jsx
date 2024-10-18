import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components";

const Cart = () => {
  const productData = useSelector((state) => state.iMstore.productData);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shipping, setShipping] = useState(0);

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

  return (
    <section>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItems />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
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
          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
