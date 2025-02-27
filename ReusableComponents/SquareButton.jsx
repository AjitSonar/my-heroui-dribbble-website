"use client";

import { Button } from "@heroui/react";

export default function SquareButton(props) {
  return (
    <div>
      <Button
        size={props.size}
        variant={props.variant}
        className={props.className}
      >
        {props.content}
      </Button>
    </div>
  );
}
