import React from "react";
import { TypeAnimation } from "react-type-animation";

import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[90px]"
            >
            
              Kamal <span>KARTI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Devloper",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur est reprehenderit quas. Quo ipsum tenetur tempore
              quaerat aut obcaecati rerum?
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>

            {/* social */}
            <div className="flex items-center text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* {Image} */}
          <div className="hidden lg:flex flex1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
