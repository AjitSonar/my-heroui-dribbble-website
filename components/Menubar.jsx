"use client";

import MenubarHeader from "./MenubarHeader";
import MenubarBody from "./MenubarBody";
import MenubarFooter from "./MenubarFooter";

export default function Menubar() {
  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div>
        <MenubarHeader />
        <MenubarBody />
      </div>
      <div>
        <MenubarFooter /> 
      </div>
    </div>
  );
}
