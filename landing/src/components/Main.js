import React from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsCodeSlash } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import aky from "../imgs/aky.jpg";

export const Main = () => {
  const [modalIsClicked, setModalIsClicked] = React.useState(false);
  if (modalIsClicked){
    return (
      <div>
        modal test
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 font-body auto-cols-max">
      <div className="col-span-1 mt-24 ml-40 max-w-lg flex flex-col gap-10 bg-yellow-400 opacity-70 rounded-md border-solid border-2 border-gray-700 shadow-2xl">
        <img
          src={aky}
          alt="a picture of me."
          className="w-64 h-64 self-center mt-5 rounded-lg opacity-100"
        />
        <p className="text-3xl pl-6 font-medium">Welcome! </p>
        <p className="text-3xl pl-6 font-light">
          You can visit my GitHub, LinkedIn pages or contact me via mail.{" "}
        </p>
        <p className="text-3xl pl-6 font-light">
          Click the{" "}
          <span className="animate-pulse text-red-800">energetic</span> button
          to know more about me and my work.{" "}
        </p>
      </div>
      <div className="grid col-span-1 grid-rows-4 h-5/6 ml-48 mt-48 ">
        <div className="row-span-1">
          <h1 className="text-8xl">Hi, I'm</h1>
          <h1 className="text-4xl">Alper Kaan YILDIZ</h1>
        </div>
        <div className="row-span-1 mt-6">
          <div className="flex gap-2">
            <BiRightArrow className="mt-2 fill-current text-red-600" />
            <h1 className="text-2xl">computer engineer</h1>
          </div>
          <div className="flex gap-2">
            <BiRightArrow className="mt-2 fill-current text-blue-linkedin" />
            <h1 className="text-2xl">frontend {"&"} backend developer</h1>
          </div>{" "}
        </div>
        <div className="row-span-1 flex flex-row gap-12">
          <div>
            <a href="https://github.com/csseaky">
              <FaGithub className="w-12 h-12 fill-current text-gray-900" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/alper-kaan-yildiz-591838117/">
              <FaLinkedin className="w-12 h-12 fill-current text-blue-linkedin" />
            </a>
          </div>
          <div>
            <button>
              <GrMail
                className="w-12 h-12 fill-current text-red-700"
                onClick={() => setModalIsClicked(true)}
              />
            </button>
          </div>
        </div>
        <div className="row-span-1">
          <button className="animate-bounce">click me</button>
        </div>
      </div>
    </div>
  );
};
