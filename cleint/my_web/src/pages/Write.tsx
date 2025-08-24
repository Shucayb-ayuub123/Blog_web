import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [value, setValue] = useState<string>("");
  console.log(value);

  return (
    <div className="flex gap-10">
      <div className="flex-5 ">
        <input
          type="text"
          name=""
          placeholder="title"
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
          <input className="hidden" type="file" name="" id="file" />
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
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input type="radio" className="bg-cyan-400 text-cyan-400" name="cat" value={"Art"} id="Art" />
            <label htmlFor="Art">Art</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input type="radio" className="bg-cyan-400 text-cyan-400" name="cat" value={"sceince"} id="sceince" />
            <label htmlFor="sceince">Sceince</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input
             className="bg-cyan-400 text-cyan-400"  type="radio"
              name="cat"
              value={"technology"}
              id="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input type="radio" className="bg-cyan-400 text-cyan-400" name="cat" value={"cinema"} id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input type="radio" className="bg-cyan-400 text-cyan-400" name="cat" value={"design"} id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="flex space-x-5 text-gray-500 font-semibold mt-1" >
            <input type="radio" className="bg-cyan-400 text-cyan-400" name="cat" value={"food"} id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
