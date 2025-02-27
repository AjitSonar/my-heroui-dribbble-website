"use client";

import Icon from "./Icon";
import TeamButton from "./TeamButton";

export default function CardBody(props) {
  return (
    <div>
      <div className="">
        <Icon
          src={props.image}
          className="sm:w-[455px] sm:h-[340px] w-[350px] h-[280px]"
          alt="Logo"
        />
      </div>

      <div className="flex justify-between sm:w-[450px] w-[350px] items-center h-14 sm:h-12">
        <div className="flex">
          <Icon src={props.icon} className="w-6 h-6 " alt="Logo" />
          <p className="ml-2">{props.studio}</p>

          <TeamButton
            size="sm"
            className="ml-3 h-5 mt-1 font-bold rounded-sm text-small hover:bg-black  text-white"
            content="TEAM"
          />
        </div>

        <div className="flex">
          <Icon src="/assets/like1.jpeg" className="w-6 h-4 mt-1" alt="Logo" />

          <p className="ml-1">{props.like}</p>
          <Icon src="/assets/view1.png" className="w-6  h-6 ml-1" alt="Logo" />

          <p className="ml-1">{props.view}</p>
        </div>
      </div>
    </div>
  );
}
