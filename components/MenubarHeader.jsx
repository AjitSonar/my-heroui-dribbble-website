"use client";

import { categories } from "@/ReusableComponents/ArrayList";
import PopularButton from "@/ReusableComponents/PopularButton";
import Filters from "@/ReusableComponents/Filters";
import RoundedButton from "@/ReusableComponents/RoundedButton";
import SearchInput from "@/ReusableComponents/SearchInput";
import { Divider } from "@heroui/react";

export default function MenubarHeader() {
  return (
    <>
      <div className="flex flex-col w-full flex-1">
        <div className="mt-12 h-20 md:hidden">
          <SearchInput
            placeholder="What are you looking for?"
            className="lg:max-w-[500px]  w-full md:hidden p-4 hover:bg-white"
            content="Shots"
            iconSrc="/assets/arrow-down.png"
            imgSrc="/assets/searchicon1.png"
          />
        </div>
        <div className="flex justify-between items-center  md:mt-20 px-4 md:px-20 h-16 w-full">
          <PopularButton
            radius="md"
            size="md"
            variant="bordered"
            className=" bg-white border-small h-[40px] w-[115px]"
            IconSrc="/assets/arrow-down.png"
            IconClassName="w-4 h-4"
            content="Popular"
          />
          <div>
            <div className="space-x-2 hidden md:flex">
              {categories.map((category, index) => (
                <RoundedButton
                  variant="light"
                  key={index}
                  className="px-4 py-2 font-bold rounded-full hover:bg-gray-300"
                  content={category}
                />
              ))}
            </div>
          </div>
          <div>
            <Filters
              radius="full"
              size="md"
              variant="bordered"
              className=" bg-white border-small h-[40px] w-[100px]"
              IconSrc="/assets/Filters.png"
              IconClassName="w-5 h-5"
              content="Filters"
            />
          </div>
        </div>
        <Divider className="md:hidden mb-4 mt-2 mr-20 ml-4 h-[0.5px] bg-gray-200" />
        <div className=" max-w-full md:hidden flex justify-center">
          {categories.map((category, index) => (
            <RoundedButton
              variant="light"
              key={index}
              className="px-4 py-2 -mt-2.5 font-bold rounded-full hover:bg-gray-300"
              content={category}
            />
          ))}
        </div>
      </div>
    </>
  );
}
