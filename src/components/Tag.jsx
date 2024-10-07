import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
export default function Tag() {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  let url = `https://api.giphy.com/v1/gifs/random?api_key=3paUgHLeIks1yg9bLxjUI0nhl8PBZxhL`;
  const [gif , setGif] = useState("")
  const[spin,setSpin] = useState(false)
  const [value,setValue] =useState("car");
  async function fetchGif(value) {
    try {
      setSpin(true)
      
      const response = await axios.get(`${url}&tag=${value}`);
      const imageSource = response.data.data.images.downsized_large.url;
      setGif(imageSource);
      setSpin(false)
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    }
  }

  useEffect(()=>{
    fetchGif(value);
  },[])  

  return (
    <div className="w-1/2 bg-blue-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-xl font-bold text-center underline">Random {value} Generator</h1>
      {spin ? (<Spinner/>):(<img src={gif} width="450px"  height="150px"/>) }
      <input type="text" className=" w-10/12  m-2 p-2 rounded-lg" onChange={(e)=>{setValue(e.target.value)}} 
      value={value}
      />
      <button 
        className="w-10/12 text-xl text-center bg-yellow-500 m-5 p-3 rounded-lg font-bold"
        onClick={fetchGif}
      >

        Generate
      </button>
    </div>
  );
}
