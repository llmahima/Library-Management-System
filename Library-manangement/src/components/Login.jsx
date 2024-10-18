 // src/components/Login.jsx
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Login = () => {

  // const URL = import.meta.env.REACT_APP_URL;
  // console.log(URL);
  const navigate = useNavigate();
  const [loginData , setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log(loginData);
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = "http://localhost:3000/api/auth"
      const response = await axios.post(URL,loginData);
      localStorage.setItem("email", response.data.data[0].email);
      <Sidebar/>
      navigate("/controlpanel");
      // console.log(response.data.data[0].email);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='absolute top-16 left-80'>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>
      <div className="flex items-center justify-center ">
      <div className=" max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="you@example.com"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              onChange={handleChange}
              name='password'
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-xs">
          &copy;2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
