import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen flex-col p-4 bg-cyan-400 space-y-6">
      <h1 className="text-cyan-800 font-bold text-4xl">Login</h1>
      <form action="" className="flex justify-center items-center flex-col space-y-4 h-100 bg-white p-10">
        <input
          type="text"
          name=""
          id=""
          required
          placeholder="username"
          className=" w-70 px-2 h-12 border-0 border-b-1   focus:outline-none"
        />
        <input
          type="password"
          name=""
          id=""
          required
          placeholder="password"
          className=" w-70 px-2 h-12 border-0 border-b-1 focus:outline-none"
        />
        <button className="bg-cyan-400 p-2  text-xl rounded-md w-70">Login</button>
        <p className="text-red-500 text-center">There's a error</p>
        <span className="text-center">Don't you have an account? <Link to={"/register"} className="underline text-blue-600">Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
