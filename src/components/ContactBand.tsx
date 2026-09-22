import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contactEmail } from "@/data/site";

export default function ContactBand() {
  return (
    <section id="kontakt" className="scroll-mt-24 relative overflow-hidden bg-[#f8f2ff] py-16 md:py-20">
      <div aria-hidden="true" className="brand-gradient absolute -right-24 -top-28 h-80 w-80 rounded-full opacity-10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 left-[8%] h-56 w-56 rounded-full bg-[#f3a6ff] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <div className="card-glow relative overflow-hidden rounded-[2rem] border border-white bg-white px-7 py-10 md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-12">
            <div aria-hidden="true" className="brand-gradient absolute right-[-4rem] top-[-5rem] h-60 w-60 rounded-full opacity-[.08] blur-2xl" />
            <div><p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><Mail className="h-4 w-4" /> Máte nápad na akci?</p><h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-[#292832] sm:text-5xl lg:text-6xl">Pojďme ho společně <span className="brand-text">vyladit.</span></h2></div>
            <a href={`mailto:${contactEmail}`} className="brand-gradient group mt-7 inline-flex w-fit shrink-0 items-center gap-5 rounded-full px-7 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(109,26,228,.25)] transition-all hover:-translate-y-1 lg:mt-0">Kontaktujte nás<span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
