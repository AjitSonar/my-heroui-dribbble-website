"use client";

import { Input } from "@heroui/react";
import Icon from "./Icon";

export default function SearchInput(props) {
  return (
    <div>
      <Input
        placeholder={props.placeholder}
        type="text"
        size="lg"
        radius="full"
        variant="flat"
        color=""
        className={props.className}
        classNames={{
          base: "placeholder:text-xs placeholder:text-gray-400 hover:bg-white",
          inputWrapper:
            "h-[54px] flex items-center data-[hover=true]:bg-white hover:border-pink-200 rounded-full border-2 border-transparent  rounded-full hover:shadow-[inset_0_0_0_10px_pink-50,0_0_20px_rgba(0,0,255,0.7)] group-data-[focus=true]:bg-white",
          input:
            "placeholder:text-sm placeholder:text-black focus:ring-blue-500",
        }}
        // className={`placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-400  ${props.className}`}
        endContent={
          <div className="flex items-center">
            <p className="text-black text-sm font-semibold">{props.content}</p>
            <Icon src={props.iconSrc} className="w-5 h-4 ml-1" alt="Logo" />

            <Icon
              src={props.imgSrc}
              className="w-11 h-8 sm:h-9 md:h-9 ml-4"
              alt="Logo"
            />
          </div>
        }
      />
    </div>
  );
}
