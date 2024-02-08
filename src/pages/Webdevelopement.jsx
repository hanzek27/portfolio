import React from "react";
import { motion } from "framer-motion";
import webDevProjectData from "../assets/work/webDevProjects.json";
import UsedTechStack from "../components/UsedTechStack";
import { PlayIcon } from "../components/Icons";

export default function WebDev() {
  return (
    <section className="h-full w-full flex md:flex-row flex-col justify-center gap-7 md:px-10 md:py-10 px-2 py-4">
      {webDevProjectData.map((project) => {
        return (
          <a href={project.projectURL} target="_blank" className="h-full flex">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="rounded-[20px] cursor-pointer flex flex-col gap-7 md:gap-0 justify-between w-full md:max-w-[500px] md:p-14 p-7 md:min-w-[370px] border border-[#1F2E3E]"
              style={{
                backgroundColor: project.background,
                color: project.fontColor,
              }}
            >
              <div className="flex flex-row justify-between gap-3">
                <div className="flex flex-col gap-3">
                  <h2 className="text-large font-semibold">{project.name}</h2>
                  <p className="text-console">{project.shortDes}</p>
                </div>
                <div>
                  <PlayIcon size="50px" color={project.fontColor} />
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={`/src/assets/images/web-developement/${project.img}`}
                  alt={project.shortDes}
                  className="w-52"
                />
              </div>
              <p className="text-paragraph">{project.description}</p>
              <UsedTechStack techStack={project.techStack} />
            </motion.div>
          </a>
        );
      })}
    </section>
  );
}
