import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaGoogle } from "react-icons/fa6";


const Login = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = async (event) => {
    event.preventDefault();

    try {
      await loginWithGoogle(email, password);
      alert("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      await loginWithGoogle();
      alert("You are connected successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-6 py-2"
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-blue-600 underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <hr className="my-4" />
        <div className="flex items-center flex-col">
          <button
            onClick={handleRegister}
            className="flex items-center bg-white border border-gray-300 rounded-md p-2"
          >
            <FaGoogle className="w-6 h-6 mr-2" />
            Login with Google
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
