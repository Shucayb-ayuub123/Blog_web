import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type UserInput = {
  username: string;
  password: string;
};

function Login() {
  const [input, setInput] = useState<UserInput>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [Err, setErr] = useState<string>("");

  // ✅ Properly typed context
  const auth = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!auth) {
        setErr("AuthContext is not available");
        return;
      }

      // await login from context
      await auth.login(input);

      // navigate only if login is successful
      navigate("/");
    } catch (error: any) {
      // make sure error is a string
      setErr(error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col p-4 bg-cyan-400 space-y-6">
      <h1 className="text-cyan-800 font-bold text-4xl">Login</h1>
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
          className="w-70 px-2 h-12 border-0 border-b-1 focus:outline-none"
        />
        <input
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          required
          placeholder="password"
          className="w-70 px-2 h-12 border-0 border-b-1 focus:outline-none"
        />
        <button className="bg-cyan-400 p-2 text-xl rounded-md w-70">
          Login
        </button>
        {Err && <p className="text-red-500">{Err}</p>}
        <span className="text-center">
          Don't you have an account?{" "}
          <Link to={"/register"} className="underline text-blue-600">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
