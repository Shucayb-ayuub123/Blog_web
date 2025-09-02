import express from "express";
import authRoute from "./route/auth.js";
import PostsRoute from "./route/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your React port
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/upload", express.static(path.join(process.cwd(), "upload")));
// Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "/upload"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    res.status(200).json(file.filename); // returns filename as string
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/post", PostsRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
