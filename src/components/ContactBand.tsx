import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-blue-600 text-white">
      <div aria-hidden="true" className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[52px] border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-44 left-1/3 h-96 w-96 rounded-full border-[72px] border-slate-950/10" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-9 px-5 py-16 md:px-10 md:py-24 lg:flex-row lg:items-end lg:justify-between lg:px-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-100">Máte nápad na akci?</p>
          <h2 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Ozvěte se nám!</h2>
        </div>
        <Link to="/kontakt" className="group inline-flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-base font-bold text-blue-700 transition-transform hover:-translate-y-1">
          Kontaktujte nás
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
