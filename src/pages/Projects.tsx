import { ArrowUpRight, Music2 } from "lucide-react";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import { eventPhotos, projects } from "@/data/site";

export default function Projects() {
  return (
    <>
      <PageMeta title="Projekty a akce | Events CZ/SK" description="Poznejte akce a festivaly Events CZ/SK: Baška žije, Fesťáček a Naplno Fest." />
      <section className="soft-festival-bg relative overflow-hidden py-16 md:py-20 lg:py-24"><div aria-hidden="true" className="brand-gradient absolute -left-24 top-12 h-64 w-64 rounded-full opacity-10 blur-3xl" /><div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14"><p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><Music2 className="h-4 w-4" /> Naše akce</p><h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#292832] sm:text-6xl lg:text-7xl">Akce, které mají <span className="brand-text">energii.</span></h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#666371]">Výběr festivalů a veřejných akcí prezentovaných v portfoliu Events CZ/SK.</p></div></section>

      <section className="bg-white py-16 md:py-20 lg:py-24"><div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14"><div className="grid gap-5 md:grid-cols-3">{projects.map((project, index) => <Reveal key={project.name} delay={index * 70}><a href={project.href} target="_blank" rel="noreferrer" className="group flex h-[360px] flex-col rounded-3xl border border-[#e8dbee] bg-white p-7 shadow-[0_12px_38px_rgba(72,28,94,.08)] transition-all hover:-translate-y-1.5 hover:border-[#cb83e9] hover:shadow-[0_18px_46px_rgba(95,24,128,.13)]"><div className="flex items-center justify-between"><span className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#841add]">{project.label}</span><span className="grid h-10 w-10 place-items-center rounded-full bg-[#f3e8f9] text-[#9815e4]"><ArrowUpRight className="h-5 w-5" /></span></div><div className="my-auto flex h-48 items-center justify-center px-5"><img src={project.image} alt={`Logo projektu ${project.name}`} className={`max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${project.imageClass}`} /></div><div className="border-t border-[#eadff0] pt-4"><h2 className="mt-1 text-2xl font-black tracking-[-0.035em] text-[#302d36]">{project.name}</h2></div></a></Reveal>)}</div></div></section>

      <section className="bg-[#faf7fc] py-16 md:py-20"><div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14"><div className="mb-8 flex items-end justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#841add]">Z produkce</p><h2 className="mt-2 text-3xl font-black tracking-[-.04em] text-[#302d36] md:text-5xl">Atmosféra akcí</h2></div></div><div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">{eventPhotos.slice(4, 10).map((photo, index) => <figure key={photo} className={`group overflow-hidden rounded-2xl ${index === 0 || index === 3 ? "col-span-2" : ""}`}><img src={photo} alt={`Atmosféra projektu Events CZ/SK ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></figure>)}</div></div></section>
      <ContactBand />
    </>
  );
}
