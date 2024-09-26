import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex space-x-8 text-5xl mb-4">
          <FaFacebook className="cursor-pointer text-purple-700" />
          <FaInstagram className="cursor-pointer text-purple-700" />
          <FaGithub className="cursor-pointer text-purple-700" />
        </div>
        <div className="text-xl mt-4 text-red-700">Anurag Kumar</div>
      </div>
    </>
  );
}

export default SocialMedia;
