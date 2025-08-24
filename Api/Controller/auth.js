import db from "../database.js";
import bcrypt from "bcrypt";

 

export const register = (req, res) => {
  const { username, email, password } = req.body;

  const checkUserSql =
    "SELECT email, username FROM users WHERE email = ? OR username = ?";

  db.query(checkUserSql, [email, username], async (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length > 0) {
      return res.status(409).json("User already exists!");
    }

    try {
      const hashPassword = await bcrypt.hash(password, 10);

      const insertUserSql =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

      db.query(insertUserSql, [username, email, hashPassword], (err) => {
        if (err) return res.status(500).json(err);

        return res.status(201).json("User has been created");
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
