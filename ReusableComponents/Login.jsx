"use client";

import { Button } from "@heroui/react";

export default function Login(props) {
  return (
    <div>
      <Button
        color={props.color}
        className={props.className}
        radius={props.radius}
        size={props.size}
        variant={props.variant}
      >
        {props.content}
      </Button>
    </div>
  );
}
