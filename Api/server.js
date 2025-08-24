import express from "express";
import authRoote from "./route/auth.js";
import cors from 'cors'
const app = express();

app.use(cors);
app.use(express.json());

app.use("/api/auth" , authRoote);
app.listen(3000, () => console.log("Server running"));
