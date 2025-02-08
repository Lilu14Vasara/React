import React from "react";
//use props inside thi card
//for also change in button give card call in same as usename and parameter give usernam,button 
//if we not give value and then want to displays some default value then write:{username||"hitesh"} is give by default hitesh value if u are not entering value
function Card({username}){
    //console.log("props",props); we directly send username as card parameters and no ned to write props.username directly write username
    console.log(username);
    return(
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://source.unsplash.com/301x301/?random"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
    )
}
export default Card