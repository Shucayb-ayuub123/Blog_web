import { Link, useLocation } from "react-router-dom";
import images from '../img/speed_jpeg.jpeg'
import { useEffect, useState } from "react";
// const posts = [
//   {
//     id: 1,
//     title:
//       "Exploring the World of Art: From Ancient Paintings to Digital Masterpieces",
//     desc: "Art has always been a reflection of human creativity and imagination. From the cave drawings of early civilizations to the grand Renaissance paintings and the modern rise of digital art, each era has brought unique styles, themes, and innovations. In this article, we explore how art continues to evolve in the 21st century, shaping culture and inspiring millions of people worldwide.",
//     img: "https://thumbs.dreamstime.com/b/beautiful-view-nature-mountains-near-konigssee-lake-bavaria-germany-blue-sky-clouds-97444419.jpg"
//   },

//   {
//     id: 2,
//     title:
//       "Technology in 2025: Artificial Intelligence, Robotics, and the Future of Innovation",
//     desc: "Technology has reached a point where artificial intelligence, robotics, and automation are no longer futuristic dreams but present realities. By 2025, we are witnessing a massive transformation in industries ranging from healthcare and education to finance and entertainment. This post examines how emerging technologies are reshaping our daily lives, improving efficiency, and raising important ethical questions about privacy, jobs, and human interaction.",
//     img: "https://picsum.photos/id/1015/600/400",
//   },
//   {
//     id: 3,
//     title:
//       "Healthy Living Tips: Building Habits That Improve Your Mind and Body",
//     desc: "Maintaining a healthy lifestyle goes beyond following a strict diet or exercising occasionally. True wellness is achieved by adopting sustainable daily habits that nurture both the body and the mind. In this article, we cover practical tips such as balanced nutrition, regular physical activity, mindfulness practices, and good sleep hygiene. These habits not only improve physical health but also enhance focus, productivity, and emotional well-being.",
//     img: "https://picsum.photos/id/1025/600/400",
//   },
//   {
//     id: 4,
//     title:
//       "Travel Guide to Hargeisa: Culture, Cuisine, and Hidden Gems of Somaliland",
//     desc: "Hargeisa, the capital of Somaliland, is a vibrant city full of history, culture, and hospitality. While it may not be as well-known as other African capitals, Hargeisa offers travelers a unique blend of traditional Somali life and modern growth. From bustling markets filled with colorful fabrics and spices to the rich taste of Somali cuisine and the breathtaking landscapes surrounding the city, Hargeisa is a destination worth discovering.",
//     img: "https://picsum.photos/id/1043/600/400",
//   },
// ];
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
      const response  = await fetch(`http://localhost:3000/api/post/getPost${cat}`)
      const data = await response.json()
      setPost(data)
    } catch (error) {
      
    }
   }
   fetchData()
  } , [cat])
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
                <img src={post.img} className="w-full max-h-96 object-cover" />
              </div>
            </div>
            <div className="flex-3 space-y-7">
              <Link to={`/post/${post.id}`}>
                <h3 className="font-bold text-2xl">{post.title}</h3>
              </Link>
              <p className="text-xl mt-4 ">{post.desc}</p>
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
