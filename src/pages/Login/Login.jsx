import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import lottie from "../assets/lottie.json";
// import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
// import axios from "axios";

const Login = () => {
  const { handleGoogleLogin, handleLogin, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   try {
  //     await handleLogin(email, password);

  //     const user = { email: email };
  //     const response = await axios.post("http://localhost:5000/jwt", user, {
  //       withCredentials: true,
  //     });

  //     // Log the JWT token to the console
  //     console.log("JWT Token:", response.data.token);

  //     navigate(from, { replace: true });
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await handleLogin(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLoginClick = async () => {
    try {
      await handleGoogleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content flex-col lg:flex-row justify-between">
        {/* Lottie Animation Section */}
        {/* <div className="w-full  flex justify-center items-center">
          <Lottie animationData={lottie} loop={true} style={{ width: "80%" }} />
        </div> */}

        {/* Login Form Section */}
        <div className="card bg-white w-full max-w-2xl shadow-2xl p-6">
          <form onSubmit={handleLoginSubmit} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Login to your account
            </h1>
            <div className="divider"></div>
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-lg w-full"
                  required
                />
                <button
                  type="button"
                  className="absolute top-3 right-3 text-xl text-gray-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  className="text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="form-control mt-6">
              {/* Standard Login Button */}
              <button className="btn bg-green-600 hover:bg-green-700 text-white py-3 px-6 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 w-full">
                Login
              </button>

              {/* Divider for UI Separation */}
              <div className="flex items-center justify-center my-4">
                <hr className="w-full border-t border-gray-300" />
                <span className="px-2 text-gray-500">or</span>
                <hr className="w-full border-t border-gray-300" />
              </div>

              {/* Google Login Section */}
              <button
                type="button"
                onClick={handleGoogleLoginClick}
                className="btn flex items-center justify-center border-2 rounded-full text-black py-3 px-6 text-lg focus:outline-none focus:ring-2 w-full"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                  alt="Google"
                />
                Login with Google
              </button>

              {/* GitHub Login Section */}
              <button
                type="button"
                className="btn flex items-center justify-center border-2 rounded-full text-black py-3 px-6 text-lg focus:outline-none focus:ring-2 w-full mt-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.485 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.07-.608.07-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.528 2.341 1.087 2.91.831.092-.647.35-1.087.637-1.338-2.22-.252-4.555-1.113-4.555-4.948 0-1.092.39-1.986 1.029-2.685-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.845a9.56 9.56 0 0 1 2.5.337c1.91-1.295 2.75-1.025 2.75-1.025.544 1.376.202 2.393.099 2.646.64.699 1.028 1.593 1.028 2.685 0 3.844-2.337 4.694-4.565 4.941.36.31.682.92.682 1.855 0 1.34-.012 2.419-.012 2.745 0 .268.181.58.688.482C19.138 20.163 22 16.418 22 12c0-5.515-4.486-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                Login with GitHub
              </button>
            </div>

            {/* Registration Redirect */}
            <p className="p-4 text-black text-sm">
              Don’t Have An Account?{" "}
              <Link to="/register" className="text-red-600 font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
