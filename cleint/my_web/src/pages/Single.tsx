import image from "../img/speed_jpeg.jpeg";

import edit from "../img/images.png";
import Delete from "../img/images (1).png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "../compound/Menu";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";

type posts = {
  id: number;
  username: string;
  title: string;
  desc: string;
  img: string;
  date: Date;
  userImg: string;
  cat:string
};
const Single = () => {
  const [posts, setPosts] = useState<posts>();
  const cat = useLocation();
  const navigate = useNavigate();

  const postID = cat.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/post/getpost/${postID}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postID]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/post/DeletePost/${postID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-10">
      <div className="flex-5 flex-col space-y-3 ">
        <img src={posts?.img} />
        <div className="flex justify-start items-center mt-1   space-x-2">
          <img src={posts?.userImg} alt="" className="w-16 h-16 rounded-4xl" />
          <div>
            <span className="font-bold text-sm">{posts?.username}</span>
            <p className="text-sm">Posted {moment(posts?.date).fromNow()}</p>
          </div>
          {currentUser.username == posts?.username && (
            <div className="flex space-x-2">
              <Link to={"/write?edit=2"}  state={posts}>
                <img src={edit} className="w-6 cursor-pointer" alt="" />
              </Link>
              <img
                onClick={handleDelete}
                src={Delete}
                className="w-6 cursor-pointer"
                alt=""
              />
            </div>
          )}
        </div>

        <h1 className="text-4xl font-bold">{posts?.title}</h1>

        {posts?.desc}
      </div>

      <div className="flex-2">
        <Menu  cat={posts?.cat}/>
      </div>
    </div>
  );
};

export default Single;
