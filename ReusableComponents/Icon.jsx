"use client";

import { Image } from "@heroui/react";

export default function Icon(props) {
  return (
    <div>
      <Image src={props.src} className={props.className} alt={props.alt} />
    </div>
  );
}
