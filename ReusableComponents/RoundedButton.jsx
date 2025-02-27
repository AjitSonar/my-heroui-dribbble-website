"use client";

import { Button } from "@heroui/react";

export default function RoundedButton(props) {
  return (
    <div>
      <Button variant={props.variant} className={props.className}>
        {props.content}
      </Button>
    </div>
  );
}
