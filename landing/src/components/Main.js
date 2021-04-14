import React from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsCodeSlash } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { BiRightArrow } from "react-icons/bi";
import aky from "../imgs/aky.jpg";
import Conversation from "../components/Conversation";
import { useGlobalContext } from "./context/useGlobalContext";

export const Main = () => {
  const { isConversationHidden, setIsConversationHidden } = useGlobalContext();
  return (
    <div className="grid grid-cols-2 font-body auto-cols-max">
      <div className="col-span-1 mt-24 ml-40 max-w-lg flex flex-col gap-10 opacity-70 rounded-md  shadow-2xl text-white">
        <img
          src={aky}
          alt="a picture of me."
          className="w-52 h-52 self-center mt-5 rounded-lg opacity-100 ml-5"
        />
        <p
          className="text-5xl pl-6 font-medium opacity-100 self-center"
          onMouseOver={() => setIsConversationHidden(!isConversationHidden)}
          onMouseOut={() => setIsConversationHidden(!isConversationHidden)}
        >
          Welcome!{" "}
        </p>
        <Conversation />
      </div>
      <div className="grid col-span-1 grid-rows-4 h-5/6 ml-48 mt-48 text-white ">
        <div className="row-span-1">
          <h1 className="text-8xl opacity-50">Hi, I'm</h1>
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
              <FaGithub className="w-12 h-12 fill-current text-white" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/alper-kaan-yildiz-591838117/">
              <FaLinkedin className="w-12 h-12 fill-current text-blue-linkedin" />
            </a>
          </div>
          <div>
            <button>
              <GrMail className="w-12 h-12 fill-current text-red-700" />
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
