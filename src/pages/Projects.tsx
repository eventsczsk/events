import { ArrowUpRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <>
      <PageMeta title="Projekty a akce | Events CZ/SK" description="Poznejte akce a festivaly Events CZ/SK: Baška žije, Fesťáček a Naplno Fest." />
      <section className="bg-slate-950 py-20 text-white md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">Naše akce</p>
          <h1 className="max-w-6xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">Akce, které mají energii.</h1>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-14 grid gap-5 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">Projekty Events CZ/SK</h2>
            <p className="max-w-lg leading-relaxed text-slate-600 md:justify-self-end">Výběr akcí prezentovaných na původním webu Events CZ/SK.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            {projects.map((project, index) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className={`group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] p-7 md:p-10 ${index === 0 ? "bg-blue-600 text-white lg:col-span-7" : index === 1 ? "bg-white text-slate-950 lg:col-span-5" : "bg-slate-950 text-white lg:col-span-12 lg:min-h-[360px]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-[0.18em] ${index === 1 ? "text-blue-600" : "text-blue-200"}`}>{project.label}</span>
                  <span className={`grid h-12 w-12 place-items-center rounded-full ${index === 1 ? "bg-blue-100 text-blue-700" : "bg-white/15 text-white"}`}><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </div>
                <div className="my-auto flex min-h-48 items-center justify-center rounded-[1.5rem] bg-white p-8 shadow-sm">
                  <img src={project.image} alt={`Logo projektu ${project.name}`} className={`max-h-44 w-auto object-contain ${project.imageClass}`} />
                </div>
                <div className="mt-7 flex items-end justify-between gap-6">
                  <h3 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">{project.name}</h3>
                  <span className="text-xs font-bold opacity-60">0{index + 1}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
