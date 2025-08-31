import express from "express";
import authRoote from "./route/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import PostsRoute from './route/posts.js'
import multer from 'multer'
const app = express();
app.use(cors({
      origin: "http://localhost:5173", // or your React port
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());  

const storage = multer.diskStorage({
  destination: function (req,file , cb) {
    cb(null , '../cleint/my_web/public/upload')
  },
  filename  : function (req,file,cb) {
         cb(null , Date.now() + file.originalname)
  }
})

const upload = multer({storage})

app.post('/api/upload' , upload.single("file") , (err,data) => {
    const file = req.file;
    res.status(200).json(file.filename)
})


app.use("/api/auth", authRoote);
app.use("/api/post", PostsRoute);

app.listen(3000, () => console.log("Server running Port 3000"));
