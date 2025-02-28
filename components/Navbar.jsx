"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@heroui/react";
import Login from "@/ReusableComponents/Login";
import Icon from "@/ReusableComponents/Icon";
import LightButton from "@/ReusableComponents/LightButton";
import SearchInput from "@/ReusableComponents/SearchInput";
import SquareIconButton from "@/ReusableComponents/SquareIconButton";
import SquareButton from "@/ReusableComponents/SquareButton";
import {
  squareIconButtons,
  squareButtons,
} from "@/ReusableComponents/ArrayList";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="flex justify-between w-full px-6 md:px-8 items-center ">
          <div className="flex flex-1 items-center justify-center">
            <div className="lg:hidden -ml-5 mt-3 ">
              <Button
                variant="light"
                className="min-w-2"
                size="sm"
                onPress={handleClick}
              >
                {isOpen ? (
                  <X />
                ) : (
                  <Icon
                    src="/assets/menu.png"
                    className="w-8 h-7  mt-2"
                    alt="Logo"
                  />
                )}
              </Button>
            </div>
            <div>
              <Icon
                src="/assets/logo.jpeg"
                className="w-25 h-14 md:-mt-4  "
                alt="Logo"
              />
            </div>
            <div className="ml-7 px-1 flex-grow">
              <SearchInput
                placeholder="What are you looking for?"
                content="Shots"
                iconSrc="/assets/arrow-down1.png"
                imgSrc="/assets/searchicon1.png"
                className="lg:max-w-[600px] w-full hidden md:block p-4 placeholder:text-xs"
              />
            </div>
            <div className="hidden flex-grow  lg:flex">
              <div className="flex space-x-2">
                {squareIconButtons.map((button, index) => (
                  <SquareIconButton
                    key={index}
                    size="md"
                    variant="light"
                    src={button.src}
                    className="w-4 h-4"
                    BtnClassName="font-semibold"
                    content={button.content}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                {squareButtons.map((button, index) => (
                  <SquareButton
                    key={index}
                    size="md"
                    variant="light"
                    className="font-semibold"
                    content={button.content}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <LightButton
              className="font-semibold hidden mt-6 sm:mt-3 md:mt-1 md:block"
              size="md"
              variant="light"
              content="Sign up"
            />

            <Login
              color="default"
              radius="full"
              size="md"
              variant="solid"
              className="bg-black text-[14px] w-[90px] h-[40px] md:w-[90px] md:h-[48px] max-w-[90px] text-white mt-3 md:mt-0"
              content=" Log in"
            />
          </div>
          {isOpen && (
            <div className="lg:hidden bg-white  pt-2 border-1 mt-14 h-auto w-full flex flex-col items-start absolute top-3 left-0 z-50">
              <div className="">
                <div className="flex flex-col">
                  {squareIconButtons.map((button, index) => (
                    <SquareIconButton
                      key={index}
                      size="md"
                      variant="light"
                      src={button.src}
                      className="w-4 h-4"
                      BtnClassName="font-bold"
                      content={button.content}
                    />
                  ))}
                </div>

                <div className="flex flex-col ">
                  {squareButtons.map((button, index) => (
                    <SquareButton
                      key={index}
                      size="md"
                      variant="light"
                      className="font-bold"
                      content={button.content}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
