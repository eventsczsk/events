import { ArrowUpRight, Sparkles } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <>
      <PageMeta title="Projekty a akce | Events CZ/SK" description="Poznejte akce a festivaly Events CZ/SK: Baška žije, Fesťáček a Naplno Fest." />
      <section className="soft-festival-bg relative overflow-hidden py-20 md:py-28 lg:py-36">
        <div aria-hidden="true" className="brand-gradient absolute -left-24 top-12 h-72 w-72 rounded-full opacity-10 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[8%] top-[18%] h-28 w-28 rotate-12 rounded-[2rem] border-[18px] border-[#c208eb]/10" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <p className="mb-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b1cdb]"><Sparkles className="h-4 w-4" /> Naše akce</p>
          <h1 className="max-w-6xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.06em] text-[#292832] sm:text-7xl lg:text-[9rem]">Akce, které mají <span className="brand-text">energii.</span></h1>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#666371] md:text-xl">Výběr festivalů a veřejných akcí prezentovaných v portfoliu Events CZ/SK.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid gap-7 lg:grid-cols-12">
            {projects.map((project, index) => {
              const layout = index === 0 ? "lg:col-span-7 lg:min-h-[610px]" : index === 1 ? "lg:col-span-5 lg:min-h-[610px] lg:translate-y-16" : "lg:col-span-10 lg:col-start-2 lg:min-h-[480px] lg:mt-16";
              return <Reveal key={project.name} className={layout} delay={index * 100}><a href={project.href} target="_blank" rel="noreferrer" className="group card-glow relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[2.8rem] border border-[#eadff2] bg-[#fcfaff] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d08eea] md:p-11"><div aria-hidden="true" className="brand-gradient absolute -right-28 -top-24 h-80 w-80 rounded-full opacity-[.08] blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-[.14]" /><div aria-hidden="true" className="absolute bottom-[-4rem] left-[-3rem] h-52 w-52 rounded-full border-[42px] border-[#6d1ae4]/[.05]" /><div className="relative flex items-center justify-between"><span className="rounded-full border border-[#ddc6eb] bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.17em] text-[#7b1cdb]">{project.label}</span><span className="brand-gradient grid h-14 w-14 place-items-center rounded-full p-4 text-white shadow-[0_12px_28px_rgba(109,26,228,.23)]"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div><div className="relative my-auto flex min-h-56 items-center justify-center rounded-[2rem] bg-white/75 p-8 shadow-[inset_0_0_0_1px_rgba(225,210,235,.8)]"><span aria-hidden="true" className="absolute text-[10rem] font-black leading-none text-[#8b18df]/[.04] sm:text-[15rem]">0{index + 1}</span><img src={project.image} alt={`Logo projektu ${project.name}`} className={`relative max-h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-110 ${project.imageClass}`} /></div><div className="relative mt-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#a198a8]">Projekt 0{index + 1}</p><h2 className="mt-2 text-5xl font-black tracking-[-0.05em] text-[#302d36] md:text-6xl">{project.name}</h2></div></a></Reveal>;
            })}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
