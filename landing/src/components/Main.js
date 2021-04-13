import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {GrContact} from 'react-icons/gr'

export const Main = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 top-0 h-screen bg-gradient-to-r from-red-500">
      <div className="col-span-1 row-span-1 h-screen  text-white grid grid-rows-6">
        <div className="row-span-1"></div>
        <div className="row-span-2 ml-20">
          <h1 className="text-7xl font-extrabold">Hi, I'm Alper.</h1>
          <p className="font-extralight mt-3 text-3xl max-w-md">
            a freelance software engineer specialized in both{" "}
            <span className="text-black font-medium">front-end</span> and{" "}
            <span className="text-black font-medium">back-end</span>.
          </p>
        </div>
        <div className="ml-20 flex gap-12 border-dashed border-2">
          <a href="github">
            <FaGithub className="w-16 h-16 fill-current text-gray-900" />
          </a>
          <a href="github">
            <FaLinkedin className="w-16 h-16 fill-current text-blue-linkedin" />
          </a>
          <a href="github">
            <GrContact className="w-16 h-16" />
          </a>
          <a href="github">
            <FaGithub className="w-16 h-16" />
          </a>
        </div>
      </div>
    </div>
  );
};
