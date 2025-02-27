"use client";

import { Button } from "@heroui/react";

import Icon from "./Icon";

export default function PopularButton(props) {
  return (
    <div>
      <Button
        radius={props.radius}
        size={props.size}
        variant={props.variant}
        className={props.className}
        endContent={
          <div>
            <Icon src={props.IconSrc} className={props.IconClassName} />
          </div>
        }
      >
        {props.content}
      </Button>
    </div>
  );
}
