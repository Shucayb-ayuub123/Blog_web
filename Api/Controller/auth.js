import db from "../database.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const register = (req, res) => {
  const { username, email, password } = req.body;

  const checkUserSql =
    "SELECT email, username FROM users WHERE email = ? OR username = ?";

  db.query(checkUserSql, [email, username], async (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {
      return res.status(409).json({ error: "User already exists!" });
    }

    try {
      const hashPassword = await bcrypt.hash(password, 10);

      const insertUserSql =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

      db.query(insertUserSql, [username, email, hashPassword], (err) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json({ message: "User has been created" });
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  });
};

export const login = (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [req.body.username], async (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0)
      return res.status(404).json({ message: "User not found" }); // <-- add return

    const PasswordCheck = await bcrypt.compare(
      req.body.password,
      data[0].password
    );
    if (!PasswordCheck)
      return res.status(400).json({ message: "Wrong username or password" });

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_KEY);
    const { password, ...other } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
 res.clearCookie("access_token", {
  httpOnly: true,
  sameSite: "none",
  secure: true
}).status(200).json("User has been logged out")
};
