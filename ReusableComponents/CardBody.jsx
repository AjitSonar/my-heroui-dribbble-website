"use client";

import Icon from "./Icon";
import TeamButton from "./TeamButton";

export default function CardBody(props) {
  return (
    <div className="ml-4">
      <div className="">
        <Icon
          src={props.image}
          className="sm:w-[350px] sm:h-[250px] w-[345px] h-[250px]"
          alt="Logo"
        />
      </div>

      <div className="flex justify-between sm:w-[350px] w-[345px] items-center h-14 sm:h-12">
        <div className="flex">
          <Icon src={props.icon} className="w-6 h-6 " alt="Logo" />
          <p className="ml-2 text-[14px]">{props.studio}</p>

          <TeamButton
            size="sm"
            className="ml-3 h-[16px] text-[10px] mt-1 font-bold rounded-sm hover:bg-black  text-white"
            content="TEAM"
          />
        </div>

        <div className="flex">
          <Icon src="/assets/like1.jpeg" className="w-6 h-4 mt-1" alt="Logo" />

          <p className="ml-1 text-[12px] mt-0.5">{props.like}</p>
          <Icon src="/assets/view1.png" className="w-6  h-6 ml-1" alt="Logo" />

          <p className="ml-1 text-[12px] mt-0.5">{props.view}</p>
        </div>
      </div>
    </div>
  );
}
