import React from "react";
import images from '../img/speed_jpeg.jpeg'
const posts = [
  {
    id: 1,
    title:
      "Exploring the World of Art: From Ancient Paintings to Digital Masterpieces",
    desc: "Art has always been a reflection of human creativity and imagination. From the cave drawings of early civilizations to the grand Renaissance paintings and the modern rise of digital art, each era has brought unique styles, themes, and innovations. In this article, we explore how art continues to evolve in the 21st century, shaping culture and inspiring millions of people worldwide.",
    img: images
  },
  {
    id: 2,
    title:
      "Technology in 2025: Artificial Intelligence, Robotics, and the Future of Innovation",
    desc: "Technology has reached a point where artificial intelligence, robotics, and automation are no longer futuristic dreams but present realities. By 2025, we are witnessing a massive transformation in industries ranging from healthcare and education to finance and entertainment. This post examines how emerging technologies are reshaping our daily lives, improving efficiency, and raising important ethical questions about privacy, jobs, and human interaction.",
    img: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 3,
    title:
      "Healthy Living Tips: Building Habits That Improve Your Mind and Body",
    desc: "Maintaining a healthy lifestyle goes beyond following a strict diet or exercising occasionally. True wellness is achieved by adopting sustainable daily habits that nurture both the body and the mind. In this article, we cover practical tips such as balanced nutrition, regular physical activity, mindfulness practices, and good sleep hygiene. These habits not only improve physical health but also enhance focus, productivity, and emotional well-being.",
    img: "https://picsum.photos/id/1025/600/400",
  },
  {
    id: 4,
    title:
      "Travel Guide to Hargeisa: Culture, Cuisine, and Hidden Gems of Somaliland",
    desc: "Hargeisa, the capital of Somaliland, is a vibrant city full of history, culture, and hospitality. While it may not be as well-known as other African capitals, Hargeisa offers travelers a unique blend of traditional Somali life and modern growth. From bustling markets filled with colorful fabrics and spices to the rich taste of Somali cuisine and the breathtaking landscapes surrounding the city, Hargeisa is a destination worth discovering.",
    img: "https://picsum.photos/id/1043/600/400",
  },
];

const Menu = () => {
  return (
    <div className="flex justify-start items-center flex-col space-y-5">
      <h1 className="text-2xl text-gray-400 font-bold mb-3">
        Other post may you like
      </h1>
      {posts.map((post) => (
        <div className="flex justify-start  flex-col">
          <img src={post.img} alt="" key={post.id} />
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <button className="mt-3 border-1 w-24 border-cyan-400 hover:bg-cyan-400 py-2 px-2">
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
