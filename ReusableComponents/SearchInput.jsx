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
        color="default"
        className={props.className}
        // classNames={{
        //   // base: "w-full border border-gray-300 rounded-lg p-10",
        //   label: "text-gray-700 font-semibold text-sm",
        //   input: "w-full p-2 rounded-full focus:ring-1 focus:ring-blue-500 border-gray-300 hover:bg-white transition-all",
        //   // errorMessage: "text-red-500 text-xs mt-1"
        // }}
        endContent={
          <div className="flex items-center">
            <p className="text-black text-sm font-semibold">{props.content}</p>
            <Icon src={props.iconSrc} className="w-5 h-4 ml-1" alt="Logo" />

            <Icon src={props.imgSrc} className="w-12 h-10  ml-4" alt="Logo" />
          </div>
        }
      />
    </div>
  );
}
