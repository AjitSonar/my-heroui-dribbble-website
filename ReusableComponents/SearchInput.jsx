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
        className={props.className}
        endContent={
          <div className="flex items-center">
            <p className="text-black text-sm font-semibold">{props.content}</p>
            <Icon
              src={props.iconSrc}
              className="w-5 h-4 ml-1 color-black"
              alt="Logo"
            />

            <Icon src={props.imgSrc} className="w-16 h-12  ml-4" alt="Logo" />
          </div>
        }
      />
    </div>
  );
}
