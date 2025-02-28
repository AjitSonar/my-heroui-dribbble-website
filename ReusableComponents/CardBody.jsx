"use client";

import Icon from "./Icon";
import TeamButton from "./TeamButton";
import { projects } from "./ArrayList";

export default function CardBody(props) {
  return (
    <div className="ml-4 cursor-pointer">
      <div className="relative group overflow-hidden rounded-2xl shadow-sm">
        <Icon
          src={props.image}
          className="sm:w-[350px] sm:h-[250px] w-[345px] h-[250px]  object-cover transition-transform duration-300 group-hover:scale-125"
          alt="Logo"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20  to-transparent"></div>

        {/* Like & View Icons */}
        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/35 px-3 py-4 rounded-md z-50 sm:w-[350px] w-[345px] flex justify-around items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <p className="text-white text-md font-semibold">{props.title}</p>
          </div>
          <div className="">
            <button className="p-2 bg-white rounded-full backdrop-blur-md hover:bg-white/50">
              <Icon className="w-6 h-6" src="/assets/bookmark6.png" />
            </button>
            <button className="p-2 ml-3 bg-white rounded-full backdrop-blur-md hover:bg-white/50">
              <Icon className="w-6 h-6" src="/assets/likelogo6.png" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between sm:w-[350px] w-[345px] items-center h-14 sm:h-12">
        <div className="flex">
          <Icon src={props.icon} className="w-6 h-6 " alt="Logo" />
          <p className="ml-2 mt-0.5 text-[14px]">{props.studio}</p>

          <TeamButton
            size="sm"
            className="ml-3 h-4 w-[35px] min-w-0 text-[10px] bg-gray-300 font-bold rounded-sm hover:bg-black  text-white"
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
// "use client";

// import Icon from "./Icon";
// import TeamButton from "./TeamButton";

// export default function CardBody(props) {
//   return (
//     <div className="ml-4">
//       <div className="">
//         <Icon
//           src={props.image}
//           className="sm:w-[350px] sm:h-[250px] w-[345px] h-[250px]"
//           alt="Logo"
//         />
//       </div>

//       <div className="flex justify-between sm:w-[350px] w-[345px] items-center h-14 sm:h-12">
//         <div className="flex">
//           <Icon src={props.icon} className="w-6 h-6 " alt="Logo" />
//           <p className="ml-2 mt-0.5 text-[14px]">{props.studio}</p>

//           <TeamButton
//             size="sm"
//             className="ml-3 h-4 w-[35px] min-w-0 text-[10px] bg-gray-300 font-bold rounded-sm hover:bg-black  text-white"
//             content="TEAM"
//           />
//         </div>

//         <div className="flex">
//           <Icon src="/assets/like1.jpeg" className="w-6 h-4 mt-1" alt="Logo" />

//           <p className="ml-1 text-[12px] mt-0.5">{props.like}</p>
//           <Icon src="/assets/view1.png" className="w-6  h-6 ml-1" alt="Logo" />

//           <p className="ml-1 text-[12px] mt-0.5">{props.view}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
