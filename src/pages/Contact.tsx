import { ArrowUpRight, Facebook, Mail } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { contactEmail, facebookUrl } from "@/data/site";

export default function Contact() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-blue-600 text-white md:min-h-[calc(100svh-88px)]">
      <PageMeta title="Kontakt | Events CZ/SK" description="Kontaktujte Events CZ/SK ohledně produkce a organizace vaší akce." />
      <div aria-hidden="true" className="absolute -right-28 top-12 h-[32rem] w-[32rem] rounded-full border-[90px] border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-60 -left-44 h-[38rem] w-[38rem] rounded-full border-[110px] border-slate-950/10" />
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] gap-14 px-5 py-16 md:min-h-[calc(100svh-88px)] md:px-10 md:py-24 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-14">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-blue-100">Kontakt</p>
          <h1 className="text-balance text-6xl font-black leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">Pojďme společně vytvořit váš event.</h1>
        </div>
        <div className="rounded-[2rem] bg-white p-7 text-slate-950 shadow-2xl md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Kontaktujte nás</p>
          <h2 className="mt-5 text-3xl font-black tracking-tight">Events CZ/SK s.r.o.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Napište nám. Rádi s vámi probereme možnosti realizace vaší akce.</p>
          <a href={`mailto:${contactEmail}`} className="group mt-10 flex items-center justify-between gap-4 border-y border-slate-200 py-6">
            <span className="flex min-w-0 items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700"><Mail className="h-5 w-5" /></span><span className="truncate text-base font-bold sm:text-lg">{contactEmail}</span></span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-blue-600"><Facebook className="h-5 w-5" /> Events CZ/SK na Facebooku</a>
        </div>
      </div>
    </section>
  );
}
