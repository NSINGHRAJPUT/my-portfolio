import React from "react";
import hero from "../../assets/images/hero.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center my-[5vh] px-[1%] md:px-[2.5%]"
    >
      <div className="text-center heading">
        <h2>About Me</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
        <div className="flex items-center justify-center w-full md:w-[180px]">
          <div className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] relative">
            <Image
              src="https://placehold.co/600x400/png"
              alt="Your Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero a orci tincidunt, vel fermentum lectus dapibus.
            Integer ut posuere libero.
          </p>
          <p className="paragraph">
            Nullam eget leo maximus, dictum eros vel, fermentum libero. Proin
            vitae semper metus. Aliquam erat volutpat.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center justify-center mt-4">
        <button className="button">Download CV</button>
        <button className="button">Hire Me</button>
      </div>
      <div className="flex justify-center mt-4">
        <FaGithub className="text-black text-2xl md:text-3xl mr-2" />
        <FaTwitter className="text-red-500 text-2xl md:text-3xl mr-2" />
        <FaLinkedin className="text-black text-2xl md:text-3xl mr-2" />
      </div>
    </div>
  );
};

export default AboutMe;
