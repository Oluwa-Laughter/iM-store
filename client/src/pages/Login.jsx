import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { google } from "../assets";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { addUser, removeUser } from "../redux/iMstoreSlice"; // Import the actions

function Login() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.iMstore.userInfo);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  function handleLogin() {
    signInWithPopup(
      auth,
      provider.setCustomParameters({ prompt: "select_account" })
    )
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          u;
          navigate("/");
        }, 2000);

        toast.success("You are Signed In!");
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("You are Signed Out!");
        dispatch(removeUser());
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 py-20 px-4">
      <div className="w-full max-w-md flex flex-col items-center justify-center gap-6">
        <div
          onClick={handleLogin}
          className="w-full text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={google} alt="googleLogo" />
          <span className="text-sm text-gray-900"> Sign in with Google</span>
        </div>
        {userInfo && (
          <button
            onClick={handleSignOut}
            className="w-full bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
          >
            Sign Out
          </button>
        )}
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
    </section>
  );
}

export default Login;
