import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

export default function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-[#f8f2ff] py-20 md:py-28">
      <div aria-hidden="true" className="brand-gradient absolute -right-24 -top-28 h-80 w-80 rounded-full opacity-10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 left-[8%] h-56 w-56 rounded-full bg-[#f3a6ff] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <div className="card-glow relative overflow-hidden rounded-[2.5rem] border border-white bg-white px-7 py-12 md:px-12 md:py-16 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-16">
            <div aria-hidden="true" className="brand-gradient absolute right-[-4rem] top-[-5rem] h-60 w-60 rounded-full opacity-[.08] blur-2xl" />
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#7b1cdb]"><Sparkles className="h-4 w-4" /> Máte nápad na akci?</p>
              <h2 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#292832] sm:text-6xl lg:text-8xl">Pojďme ho společně <span className="brand-text">vyladit.</span></h2>
            </div>
            <Link to="/kontakt" className="brand-gradient group mt-9 inline-flex w-fit shrink-0 items-center gap-5 rounded-full px-7 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(109,26,228,.25)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(194,8,235,.3)] lg:mt-0">
              Kontaktujte nás
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
