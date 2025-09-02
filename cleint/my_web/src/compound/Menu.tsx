import React, { useState, useEffect } from "react";

type posts = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

type category = {
  cat: string | undefined;
};

const Menu: React.FC<category> = ({ cat }) => {
  const [posts, setPosts] = useState<posts[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/post/getpost?cat=${cat}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);
   
  

  return (
    <div className="flex justify-start items-center flex-col space-y-5">
      <h1 className="text-2xl text-gray-400 font-bold mb-3">
        Other posts you may like
      </h1>
      {posts?.map((p) => (
        <div className="flex justify-start flex-col" key={p.id}>
          <img src={`http://localhost:3000/upload/${p.img}`} alt={p.title} />
          <h2 className="text-3xl font-bold">{p.title}</h2>
          <button className="mt-3 border-1 w-24 border-cyan-400 hover:bg-cyan-400 py-2 px-2">
            Read More
          </button>
        </div>
      ))}
      {posts?.length === 0 && <p>No posts found.</p>}
    </div>
  );
};

export default Menu;
