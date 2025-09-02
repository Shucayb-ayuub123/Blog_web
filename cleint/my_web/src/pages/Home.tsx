import { Link, useLocation } from "react-router-dom";
import images from '../img/speed_jpeg.jpeg'
import { useEffect, useState } from "react";

type posts = {
  id:number,
  title:string,
  desc:string,
  img:string,
  

}
const Home = () => {

  const[post , setPost] = useState<posts[]|undefined>()
  const cat = useLocation().search

  
  useEffect(() => {
   const fetchData = async () =>{
    try {
      const response  = await fetch(`http://localhost:3000/api/post/getPost/${cat}`)
      const data = await response.json()
      setPost(data)
    } catch (error) {
      
    }
   }
   fetchData()
  } , [cat])

  const getText = (html:any) => {
    const docs = new DOMParser().parseFromString(html , "text/html")
    return docs.body.textContent
  }
  return (
    <div>
      <div className="mt-43 flex flex-col gap-36">
        {post?.map((post) => (
          <div
            className="flex gap-26 [&:nth-child(2n+1)]:flex-row-reverse"
            key={post.id}
          >
            <div className="flex-2 ">
              <div className=" relative after:content-[''] after:w-full after:h-full after:bg-cyan-400 after:absolute after:top-5 after:-left-5 after:-z-1">
                <img src={`http://localhost:3000/upload/${post.img}`} className="w-full max-h-96 object-cover" />
              </div>
            </div>
            <div className="flex-3 space-y-7">
              <Link to={`/post/${post.id}`}>
                <h3 className="font-bold text-2xl">{post.title}</h3>
              </Link>
              <p className="text-xl mt-4 ">{getText(post.desc)}</p>
              <button className=" border-1 border-cyan-400 hover:bg-cyan-400 py-2 px-2 ">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
