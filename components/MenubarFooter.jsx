"use client";

import {
  footerMenu1,
  footerMenu2,
  footerMenu3,
  socialIcons,
} from "@/ReusableComponents/ArrayList";
import Icon from "@/ReusableComponents/Icon";
import LightButton from "@/ReusableComponents/LightButton";

export default function MenubarFooter() {
  return (
    <div className=" flex justify-center items-center">
      <div className="md:flex flex-col h-full  justify-evenly  w-[1200px] ">
        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center mt-10 md:mt-10 h-32 w-full">
          <div>
            <Icon
              src="/assets/logo.jpeg"
              className="cursor-pointer w-28 -mt-3 h-14"
              alt="Logo"
            />
          </div>

          <div className="flex justify-center flex-wrap md:space-x-2">
            {footerMenu1.map((category, index) => (
              <LightButton
                variant="light"
                size="md"
                key={index}
                className="font-semibold text-[14px] "
                content={category}
              />
            ))}
          </div>

          <div className="flex justify-between items-center space-x-2">
            {socialIcons.map((icon, index) => (
              <Icon
                key={index}
                src={icon.src}
                className={`cursor-pointer ${icon.width} ${icon.height}`}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center lg:justify-between items-center mt-12 md:mt-0 md:mb-0 mb-10 h-24 w-full">
          <div>
            <ul className="flex flex-wrap justify-center">
              {footerMenu2.map((items, index) => (
                <li key={index} className="mx-2 text-[14px] cursor-pointer">
                  {items}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center ">
              {footerMenu3.map((items, index) => (
                <li key={index} className="mx-2 text-[14px] cursor-pointer">
                  {items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
