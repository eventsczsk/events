import { useState } from "react";
import { Realization } from "@/data/realizations";

export default function RealizationBrandLogo({ project }: { project: Realization }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`flex h-full w-full items-center justify-center p-10 md:p-14 ${project.id === "mattoni" ? "bg-[#0d224c] text-white" : "bg-white text-[#302d36]"}`}>
      {project.logo && !failed ? (
        <img src={project.logo} alt={`Logo ${project.brand}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} className="max-h-[65%] w-[65%] max-w-72 object-contain transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <span className="text-4xl font-black tracking-tight">{project.brand}</span>
      )}
    </div>
  );
}
