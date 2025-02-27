"use client";

import { projects } from "@/ReusableComponents/ArrayList";
import CardBody from "@/ReusableComponents/CardBody";

export default function MenubarBody() {
  return (
    // <div className="flex flex-wrap justify-around gap-6 mb-20 h-full w-full mt-5">
    <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-20 h-auto w-full mt-5 px-5 sm:px-16">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col">
          <CardBody
            image={project.image}
            icon={project.icon}
            studio={project.studio}
            like={project.like}
            view={project.view}
          />
        </div>
      ))}
    </div>
  );
}
