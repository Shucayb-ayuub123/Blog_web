import { useState } from "react";
import { useEffect } from "react";

import { createContext } from "react";
import type { ReactNode } from "react";

type User = string | null;

type LoginInput = {
  username: string;
  password: string;
};

type AuthContextType = {
  currentUser: User | null;
  login: (input: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const getStoredUser = (): User => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? (JSON.parse(stored) as User) : null;
    } catch {
      return null;
    }
  };

  const [currentUser, setCurrentuser] = useState<User>(getStoredUser);

  const login = async (input: LoginInput) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
      credentials: "include", // for cookies
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // ✅ Save user object
    setCurrentuser(data);
  };

  const logout = async () => {
    await fetch("http://localhost:3000/api/auth/logout", {
       method: "DELETE",
      credentials: "include",
    });
    setCurrentuser(null);
  };

  useEffect(() => {
    if (currentUser !== undefined) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
