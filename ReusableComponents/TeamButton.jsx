"use client";

import { Button } from "@heroui/react";

export default function TeamButton(props) {
  return (
    <div>
      <Button size={props.size} className={props.className}>
        {props.content}
      </Button>
    </div>
  );
}
