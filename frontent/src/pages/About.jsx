import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
            cupiditate quos fugit delectus necessitatibus, porro, corporis
            aliquam molestiae, enim ad cumque! Architecto reprehenderit,
            perspiciatis corporis soluta odio repellendus voluptates!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            aspernatur debitis eveniet? Magnam, excepturi. Quas officiis quis
            molestiae doloremque pariatur!
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quae.
            Quis at tempora consequuntur illum.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance.</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ab
            nihil deserunt et magnam sapiente, ipsum asperiores recusandae
            itaque necessitatibus.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence.</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
            animi! Optio ullam sunt impedit voluptates corrupti consequatur
            labore a deserunt laborum. Odio voluptate expedita atque.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service.</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium numquam quo tempore ad itaque possimus earum architecto,
            vel voluptates, hic et tempora incidunt quia aperiam ex consequuntur
            eveniet, saepe molestiae.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
