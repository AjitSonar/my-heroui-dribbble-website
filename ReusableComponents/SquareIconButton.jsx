"use client";

import { Button } from "@heroui/react";
import Icon from "./Icon";

export default function SquareIconButton(props) {
  return (
    <div>
      <Button
        size={props.size}
        variant={props.variant}
        className={props.BtnClassName}
        endContent={
          <Icon src={props.src} className={props.className} alt={props.alt} />
        }
      >
        {props.content}
      </Button>
    </div>
  );
}
