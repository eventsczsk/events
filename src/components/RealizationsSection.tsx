import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RealizationDetail from "@/components/RealizationDetail";
import RealizationCollage from "@/components/RealizationCollage";
import RealizationBrandLogo from "@/components/RealizationBrandLogo";
import { Realization, realizations } from "@/data/realizations";

export default function RealizationsSection() {
  const [selected, setSelected] = useState<Realization | null>(null);

  return (
    <section id="reference" className="scroll-mt-24 bg-[#faf7fc] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[.22em] text-[#841add]">Reference / Realizace</p>
            <h2 className="text-balance text-3xl font-black leading-[1.05] tracking-[-.045em] text-[#302d36] md:text-5xl">Značky, pro které <span className="brand-text">tvoříme zážitky</span></h2>
            <p className="mt-5 text-base leading-relaxed text-[#69616f] md:text-lg">Za každou realizací stojí konkrétní nápad, promyšlený prostor a tým, který ho dokáže proměnit ve skutečnost. Podívejte se na vybrané projekty, na kterých jsme spolupracovali se známými značkami.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {realizations.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 70}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`Otevřít detail realizace ${project.brand}`}
                className="group block h-full w-full overflow-hidden rounded-3xl border border-[#e7d9ee] bg-white text-left shadow-[0_10px_35px_rgba(68,28,91,.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cc8ce8] hover:shadow-[0_18px_45px_rgba(98,25,132,.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#841add] focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f5eff9]">
                  <div className="absolute inset-0">{project.photos.some((photo) => !photo.illustrative) ? <RealizationCollage photos={project.photos.filter((photo) => !photo.illustrative)} brand={project.brand} /> : <RealizationBrandLogo project={project} />}</div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.15em] text-[#841add]">{project.type || "Realizace"}</span>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#87788f]">{project.projectName ? project.brand : "Realizace"}</p><h3 className="mt-2 text-2xl font-black tracking-[-.035em] text-[#302d36] md:text-3xl">{project.projectName || project.brand}</h3></div>
                    <span className="brand-gradient grid h-11 w-11 shrink-0 place-items-center rounded-full text-white transition-transform group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
                  </div>
                  {project.description && <p className="mt-3 text-sm leading-relaxed text-[#69616f]">{project.description}</p>}
                  <span className="mt-5 inline-block text-sm font-bold text-[#841add]">Detail realizace</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {selected && <RealizationDetail key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
