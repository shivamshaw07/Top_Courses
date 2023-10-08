import React, { useState } from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {
  const [like,setlike] = useState(false)
  let likedCourses = props.likedCourses
  let setlikedCourses = props.setlikedCourses
  const likeHandler = () =>{
    if(likedCourses.includes(props.course.id)){
      setlikedCourses((prev) => prev.filter((cid)=>(cid!==props.course.id)))
      toast.warning("Unliked succesfully")
    }
    else{
      if(likedCourses.length === 0){
        setlikedCourses([props.course.id])

      }
      else{
        setlikedCourses((prev)=>([...prev,props.course.id]))
      }
      toast.success("Liked succesfully")
    }
    setlike(
      !like
    )
    
  }
  return (
    <div className="flex flex-col w-[100%] h-[50vh] items-center  bg-slate-950 text-white rounded-md">
      <div className="relative w-[100%]">
        <img src={props.course.image.url} className="w-[100%] h-[22vh] rounded-md" />
        <button className="absolute top-[19vh] left-[20rem] bg-white p-2 rounded-full" onClick={likeHandler}>
          {
            !like ? <FcLikePlaceholder/> : <FcLike/>
          }
        </button>
      </div>
      <div className=" overflow-clip flex flex-col gap-[.3rem] p-2 pb-2">
        <h2 className="font-bold text-[1.3em]">{props.course.title}</h2>
        <p className="text-[.9rem]">{
        props.course.description.length > 120 ? props.course.description.substr(0,120): props.course.description
        }....</p>
      </div>
    </div>
  );
};

export default Card;
