"use client";

import { Button } from "@heroui/react";

export default function LightButton(props) {
  return (
    <div>
      <Button
        variant={props.variant}
        size={props.size}
        className={props.className}
      >
        {props.content}
      </Button>
    </div>
  );
}
