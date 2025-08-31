import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
type user = {
  username: string;
  email: string;
  password: string;
};
function Register() {
  const [input, setInput] = useState<user>({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const [Err, setErr] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      navigate('/Login')
    } catch (error: any) {
      setErr(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col p-4 bg-cyan-400 space-y-6">
      <h1 className="text-cyan-800 font-bold text-4xl">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col space-y-4 h-100 bg-white p-10"
      >
        <input
          type="text"
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          required
          placeholder="username"
          className=" w-70 px-2 h-12 border-0 border-b-1   focus:outline-none"
        />
        <input
          type="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          required
          placeholder="email"
          className=" w-70 px-2 h-12 border-0 border-b-1   focus:outline-none"
        />
        <input
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          required
          placeholder="password"
          className=" w-70 px-2 h-12 border-0 border-b-1 focus:outline-none"
        />
        <button
          className="bg-cyan-400 p-2  text-xl rounded-md w-70 "
          type="submit"
        >
          Register
        </button>
        {Err && <p className="text-red-500 text-center">{Err}</p>}
        <span className="text-center">
          Don't you have an account?{" "}
          <Link to={"/Login"} className="underline text-blue-600">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
