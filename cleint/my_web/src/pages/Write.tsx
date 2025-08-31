import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

function App() {
  const state = useLocation().state;
  const [value, setValue] = useState<string>(state?.desc || "");
  const [title, setTitle] = useState<string>(state?.title || "");
  const [file, setFile] = useState<File | null>();
  const [cat, setCat] = useState<string>(state?.cat || "");

  const uplaod = async () => {
      if (!file) {
        return ""
      }
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });

    return await response.json();
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const { file: imgUrl } = await uplaod();
    try {
      state
        ? await fetch(`http://localhost:3000/api/post/post/${state.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title,
              value,
              cat,
              img: file ? imgUrl : ""
            }),
          })
        : await fetch(`http://localhost:3000/api/post/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  title,
              value,
              cat,
              img: file ? imgUrl : "",
              date : moment(Date.now()).format("YYY-MM-DD HH:mm:ss")
            }),
          });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-10">
      <div className="flex-5 ">
        <input
          type="text"
          name=""
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id=""
          className="border-1 focus:outline-none w-full mb-2 h-10 px-2 border-gray-400"
        />
        <div className="h-80">
          <ReactQuill
            theme="snow"
            className="h-full text-xl "
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 flex-3 ">
        <div className="flex flex-col gap-3 w-full  border-1 border-gray-300 p-4">
          <h1 className="text-3xl font-bold text-gray-600">Publish</h1>
          <span className="text-lg text-gray-600">
            <b>Status : </b> Draft
          </span>

          <span className="text-lg text-gray-600">
            <b>Visibility : </b> Public
          </span>
          <input
            className="hidden"
            type="file"
            name="file"
            id="file"
            
            onChange={(e) => setFile(e.target.files?.[0])}
          />  
          <label htmlFor="file" className="underline text-lg">
            Upload image
          </label>
          <div className="flex justify-between">
            <button className="bg-white border-1 text-cyan-700 border-cyan-400  px-3">
              Save as a draft
            </button>
            <button className="bg-cyan-400 p-1 px-3">Update</button>
          </div>
        </div>

        <div className="border-1  border-gray-300  w-full p-4">
          <h1 className="text-3xl font-bold text-black ">Category</h1>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              type="radio"
              className="bg-cyan-400 text-cyan-400"
              name="cat"
              value={cat}
              id="Art"
              checked={cat == "ART"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="Art">Art</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              type="radio"
              className="bg-cyan-400 text-cyan-400"
              name="cat"
              value={cat}
              id="sceince"
              onChange={(e) => setCat(e.target.value)}
              checked={cat == "sceince"}
            />
            <label htmlFor="sceince">Sceince</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              className="bg-cyan-400 text-cyan-400"
              type="radio"
              name="cat"
              value={cat}
              id="technolo      gy"
              onChange={(e) => setCat(e.target.value)}
              checked={cat == "technology"}
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              type="radio"
              className="bg-cyan-400 text-cyan-400"
              name="cat"
              value={cat}
              id="cinema"
              onChange={(e) => setCat(e.target.value)}
              checked={cat == "cinema"}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              type="radio"
              className="bg-cyan-400 text-cyan-400"
              name="cat"
              value={cat}
              id="design"
              onChange={(e) => setCat(e.target.value)}
              checked={cat == "desing"}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1">
            <input
              type="radio"
              className="bg-cyan-400 text-cyan-400"
              name="cat"
              value={cat}
              id="food"
              onChange={(e) => setCat(e.target.value)}
              checked={cat == "food"}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
