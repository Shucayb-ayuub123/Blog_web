import db from "../database.js";
import jwt from 'jsonwebtoken'
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts where cat= ? "
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(400).json(data);
  });
};
export const getPost = (req, res) => {
  const sql =
    "SELECT p.id `username` , `title` , `desc`, p.img , u.img AS userImg , `cat`, `date` FROM users u JOIN posts p ON  u.id = p.user_id WHERE p.id = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPosts = (req, res) => {
  res.json("We add this post");
};
export const updatePosts = (req, res) => {
};
export const deletePosts = (req, res) => {

  const token = req.cookies.access_token
  if(!token) return res.status(401).json("Not authenticated")
    jwt.verify(token , process.env.SECRET_KEY, (err,userInfo) => {
      
      if(err) return res.status(403).json("Token is not valid!")


        const postId = req.params.id

        const q = "DELETE FROM posts WHERE `id` = ? AND `user_id` = ? "

        db.query(q , [postId , userInfo.id] , (err , data) => {
          if(err) return res.status(403).json("You can delete only your post")
            return res.json("Post has been deleted")
        })
  
    })
};
