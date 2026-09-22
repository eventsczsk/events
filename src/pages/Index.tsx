import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ContactBand from "@/components/ContactBand";
import PageMeta from "@/components/PageMeta";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { eventPhotos, projects, services } from "@/data/site";

export default function Index() {
  return (
    <>
      <PageMeta title="Events CZ/SK – Vyladěné eventy" description="Produkce a organizace eventů, festivalů a veřejných akcí. Events CZ/SK zajistí váš event do posledního detailu." />

      <section className="relative min-h-[860px] overflow-hidden bg-[#f8f3fb] lg:min-h-[calc(100svh-88px)]">
        <img
          src={eventPhotos[0]}
          alt="Atmosféra akce produkované Events CZ/SK"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/5 lg:via-white/70 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#faf7fc] to-transparent" />
        <div aria-hidden="true" className="brand-gradient absolute right-[8%] top-[14%] h-28 w-28 rounded-full opacity-25 blur-2xl" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 pb-24 pt-16 md:px-10 lg:min-h-[calc(100svh-88px)] lg:px-14 lg:pb-36">
          <div className="max-w-[820px] animate-rise">
            <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#781adb]">
              <span className="brand-gradient h-2.5 w-2.5 rounded-full shadow-[0_0_20px_rgba(194,8,235,.65)]" /> Events CZ/SK s.r.o.
            </p>
            <h1 className="text-[clamp(3.7rem,8.2vw,9rem)] font-black leading-[0.82] tracking-[-0.075em] text-[#292832] drop-shadow-[0_2px_0_rgba(255,255,255,.5)]">
              Eventy <span className="brand-text">vyladěné</span><br />do posledního<br />detailu.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#514e58] md:text-xl">Produkce a organizace eventů, festivalů a veřejných akcí. Od prvního nápadu po poslední detail realizace.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/kontakt" className="brand-gradient group inline-flex items-center gap-4 rounded-full px-7 py-4 font-bold text-white shadow-[0_14px_32px_rgba(109,26,228,.30)] transition-all hover:-translate-y-1">Kontaktujte nás <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              <Link to="/projekty" className="inline-flex items-center gap-3 rounded-full border border-white bg-white/90 px-7 py-4 font-bold text-[#423e48] shadow-[0_10px_30px_rgba(64,39,78,.12)] backdrop-blur-md transition-all hover:-translate-y-1 hover:text-[#8219df]">Naše akce</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-28 pb-24 md:-mt-32 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="mb-6 flex items-end justify-between gap-6 px-1">
            <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#8219df]">Nabízené služby</p><h2 className="mt-2 text-3xl font-black tracking-[-.04em] text-[#302d36] md:text-5xl">Zařídíme pro vás</h2></div>
            <Link to="/sluzby" className="hidden items-center gap-2 font-bold text-[#8319df] sm:flex">Všechny služby <ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const span = index < 2 ? "lg:col-span-6" : index === 6 ? "lg:col-span-4 lg:col-start-5" : "lg:col-span-3";
              return (
                <Reveal key={service.title} className={span} delay={(index % 4) * 70}>
                  <article className={`group relative h-full overflow-hidden rounded-[1.75rem] border border-[#eadff1] bg-white p-6 shadow-[0_14px_45px_rgba(68,28,91,.09)] transition-all duration-400 hover:-translate-y-2 hover:border-[#cb83e9] hover:shadow-[0_22px_55px_rgba(98,25,132,.15)] ${index < 2 ? "min-h-[240px] md:p-8" : "min-h-[260px]"}`}>
                    <div aria-hidden="true" className="brand-gradient absolute -right-20 -top-24 h-52 w-52 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[.12]" />
                    <div className="relative flex items-start justify-between">
                      <span className="brand-gradient grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_10px_26px_rgba(109,26,228,.25)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"><Icon className="h-6 w-6" /></span>
                      <span className="text-xs font-extrabold text-[#b0a7b5]">0{index + 1}</span>
                    </div>
                    <h3 className="relative mt-8 pr-8 text-xl font-black leading-tight tracking-[-.025em] text-[#302d36] md:text-2xl">{service.title}</h3>
                    <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-[#6d6873]">{service.description}</p>
                    <ArrowRight className="absolute bottom-5 right-6 h-5 w-5 text-[#a50ce8] transition-transform group-hover:translate-x-1" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div aria-hidden="true" className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#f2cfff] opacity-45 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24 lg:px-14">
          <Reveal className="relative min-h-[590px]">
            <div className="absolute left-0 top-0 h-[74%] w-[72%] overflow-hidden rounded-[2.6rem] shadow-[0_26px_70px_rgba(73,35,95,.17)]"><img src={eventPhotos[1]} alt="Atmosféra eventu – publikum a program" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" /></div>
            <div className="absolute bottom-0 right-0 h-[56%] w-[57%] overflow-hidden rounded-[2.2rem] border-[7px] border-white shadow-[0_22px_60px_rgba(73,35,95,.18)]"><img src={eventPhotos[2]} alt="Moment z produkované veřejné akce" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" /></div>
            <div className="brand-gradient absolute bottom-[8%] left-[5%] grid h-20 w-20 place-items-center rounded-full text-white shadow-[0_14px_32px_rgba(109,26,228,.3)]"><Sparkles className="h-8 w-8" /></div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#841add]">O Events CZ/SK</p>
            <h2 className="text-balance text-4xl font-black leading-[1.01] tracking-[-0.05em] text-[#302d36] sm:text-5xl lg:text-7xl">Od stavby pódia až po <span className="brand-text">poslední světlo.</span></h2>
            <p className="mt-8 text-lg leading-relaxed text-[#66616c]">Vše zařídíme podle vašich představ – občerstvení, program, výzdobu, vybavení, zvuk, interprety, moderátory i úklid.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">{["Produkce na klíč", "Technické vybavení", "Program a interpreti", "Bezpečný průběh"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#eadff0] bg-[#fcf9fe] px-4 py-3 font-semibold text-[#514d58]"><span className="brand-gradient grid h-7 w-7 place-items-center rounded-full text-white"><Check className="h-4 w-4" /></span>{item}</div>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="soft-festival-bg relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><SectionHeading eyebrow="Naše akce" title="Projekty, které žijí s publikem" description="Festivaly a veřejné akce prezentované v portfoliu Events CZ/SK." /></Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {projects.map((project, index) => {
              const layout = index === 0 ? "lg:col-span-7 lg:min-h-[520px]" : index === 1 ? "lg:col-span-5 lg:min-h-[520px]" : "lg:col-span-12 lg:min-h-[390px]";
              return (
                <Reveal key={project.name} className={layout} delay={index * 90}>
                  <a href={project.href} target="_blank" rel="noreferrer" className="group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[2.5rem] border border-[#e8dbee] bg-white p-7 shadow-[0_18px_55px_rgba(72,28,94,.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_65px_rgba(95,24,128,.15)] md:p-10">
                    <div className="relative flex items-center justify-between"><span className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#841add]">{project.label}</span><span className="brand-gradient grid h-12 w-12 place-items-center rounded-full text-white"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div>
                    <div className="relative my-auto flex min-h-48 items-center justify-center rounded-[2rem] bg-[#fbf8fd] p-8"><span aria-hidden="true" className="absolute text-[10rem] font-black leading-none text-[#791bdd]/[.045]">0{index + 1}</span><img src={project.image} alt={`Logo projektu ${project.name}`} className={`relative max-h-44 w-auto object-contain transition-transform duration-700 group-hover:scale-110 ${project.imageClass}`} loading="lazy" /></div>
                    <div className="relative mt-7 border-t border-[#eadff0] pt-6"><h3 className="text-4xl font-black tracking-[-.045em] text-[#302d36] md:text-5xl">{project.name}</h3></div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <Reveal><div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Atmosféra" title="Světla. Hudba. Lidé." /><p className="max-w-md text-lg leading-relaxed text-[#69646f]">Skutečné momenty ze skutečných akcí Events CZ/SK.</p></div></Reveal>
          <div className="mt-14 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] md:grid-cols-4 md:gap-5 lg:auto-rows-[280px]">
            {eventPhotos.slice(3).map((photo, index) => {
              const shape = index === 0 ? "col-span-2 row-span-2" : index === 3 ? "row-span-2" : index === 5 ? "col-span-2" : index === 8 ? "col-span-2" : "";
              return <Reveal key={photo} className={shape} delay={(index % 4) * 60}><figure className="group h-full overflow-hidden rounded-[1.6rem] bg-[#f3edf6]"><img src={photo} alt={`Atmosféra akce Events CZ/SK ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /></figure></Reveal>;
            })}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
