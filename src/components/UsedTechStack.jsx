import React from "react";

export default function UsedTechStack({ techStack }) {
  return (
    <div className="flex flex-wrap gap-3 md:gap-6 items-center">
      {techStack.map((tech) => (
        <img className="w-8" src={`/tech_icons/${tech}.svg`} alt={techStack} />
      ))}
    </div>
  );
}
