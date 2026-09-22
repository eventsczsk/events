import { ArrowRight, Check, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import { projects, services } from "@/data/site";

const heroImage = "https://img.youtube.com/vi/ZD8akF_81oE/maxresdefault.jpg";

export default function Index() {
  return (
    <>
      <PageMeta title="Events CZ/SK – Vyladěné eventy" description="Produkce a organizace eventů, festivalů a veřejných akcí. Events CZ/SK zajistí váš event do posledního detailu." />
      <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-slate-950 text-white md:min-h-[calc(100svh-88px)]">
        <img src={heroImage} alt="Atmosféra eventu produkovaného Events CZ/SK" className="absolute inset-0 h-full w-full object-cover opacity-45" fetchPriority="high" />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1440px] flex-col justify-end px-5 pb-10 pt-20 md:min-h-[calc(100svh-88px)] md:px-10 md:pb-16 lg:px-14">
          <div className="max-w-5xl animate-rise">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-300">
              <span className="h-px w-10 bg-blue-400" /> Events CZ/SK s.r.o.
            </p>
            <h1 className="text-balance text-[clamp(3.6rem,10vw,9.5rem)] font-black leading-[0.84] tracking-[-0.065em]">
              Eventy <span className="text-blue-400">vyladěné</span> do posledního detailu.
            </h1>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/25 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              Produkce a organizace eventů, festivalů a veřejných akcí. Od prvního nápadu po poslední detail realizace.
            </p>
            <Link to="/sluzby" className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Co umíme <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div className="flex items-start gap-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" /> O Events CZ/SK
            </div>
            <div>
              <p className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-6xl">
                Zajistíme kompletní event od stavby pódia až po catering.
              </p>
              <div className="mt-9 grid gap-5 border-t border-slate-200 pt-8 text-slate-600 sm:grid-cols-2">
                <p className="leading-relaxed">Vše zařídíme podle vašich představ – občerstvení, program, výzdobu, vybavení, zvuk i interprety.</p>
                <p className="leading-relaxed">Postaráme se také o moderátory, bezpečnost, bezkontaktní placení i kompletní úklid po akci.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Nabízené služby" title="Zařídíme pro vás" />
            <Link to="/sluzby" className="group inline-flex w-fit items-center gap-3 font-bold text-blue-600">
              Všechny služby <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="mt-14 grid border-x border-t border-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group min-h-72 border-b border-slate-300 p-7 transition-colors hover:bg-white md:p-9 lg:[&:not(:nth-child(3n))]:border-r">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white transition-transform group-hover:scale-110"><Icon className="h-5 w-5" /></span>
                    <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-black tracking-tight text-slate-950">{service.title}</h3>
                  <p className="mt-4 line-clamp-3 leading-relaxed text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 py-20 text-white md:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading eyebrow="Naše akce" title="Projekty, které žijí s publikem" light />
          <div className="mt-14 space-y-4">
            {projects.map((project, index) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="group grid min-h-44 items-center gap-8 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[.04] p-6 transition-colors hover:border-blue-400 hover:bg-white/[.08] md:grid-cols-[80px_1fr_1.2fr_48px] md:p-9">
                <span className="text-xs font-bold text-blue-400">0{index + 1}</span>
                <div>
                  <h3 className="text-3xl font-black tracking-tight md:text-4xl">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{project.label}</p>
                </div>
                <div className="flex h-28 items-center justify-center rounded-2xl bg-white p-5">
                  <img src={project.image} alt={`Logo projektu ${project.name}`} className={`max-h-full w-auto object-contain ${project.imageClass}`} loading="lazy" />
                </div>
                <span className="hidden h-12 w-12 place-items-center rounded-full bg-blue-600 transition-transform group-hover:rotate-[-12deg] md:grid"><ArrowRight className="h-5 w-5 -rotate-45" /></span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
            {["Produkce", "Technické zajištění", "Program", "Bezpečnost"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-400" /> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="relative min-h-[65svh] overflow-hidden">
        <img src={heroImage} alt="Pódium a návštěvníci během eventu" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-slate-950/45" />
        <a href="https://youtu.be/ZD8akF_81oE" target="_blank" rel="noreferrer" className="absolute inset-0 grid place-items-center" aria-label="Přehrát video z akce">
          <span className="grid h-24 w-24 place-items-center rounded-full bg-white text-blue-600 shadow-2xl transition-transform hover:scale-110 md:h-32 md:w-32"><Play className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10" /></span>
        </a>
        <p className="absolute bottom-7 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white md:bottom-10 md:left-10 lg:left-14">Atmosféra našich akcí</p>
      </section>

      <ContactBand />
    </>
  );
}
