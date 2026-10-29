import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog, DialogClose, DialogDescription, DialogOverlay,
  DialogPortal, DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Realization } from "@/data/realizations";
import RealizationBrandLogo from "@/components/RealizationBrandLogo";

export function RealizationPlaceholder({ brand }: { brand: string }) {
  return (
    <div className="flex h-full min-h-48 items-center justify-center bg-[#f5eff9] px-6 text-center">
      <p className="text-4xl font-black tracking-tight text-[#302d36]">{brand}</p>
    </div>
  );
}

export default function RealizationDetail({ project, onClose }: { project: Realization; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const photos = project.photos.filter((photo) => !photo.illustrative);
  const photo = photos[index];
  const previous = () => setIndex((value) => (value - 1 + photos.length) % photos.length);
  const next = () => setIndex((value) => (value + 1) % photos.length);

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogPortal>
        <DialogOverlay className="z-[60] bg-[#665073]/35 backdrop-blur-sm" />
        <DialogPrimitive.Content aria-describedby={project.description ? `realization-description-${project.id}` : undefined} className="fixed left-1/2 top-1/2 z-[61] max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-[#eadff1] bg-white shadow-[0_24px_90px_rgba(65,25,95,.2)]">
          <div className="flex items-start justify-between gap-5 px-6 py-5 md:px-8">
            <div>
              <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#841add]">Realizace / {project.brand}</p>
              <DialogTitle className="text-2xl font-black tracking-tight text-[#302d36] md:text-3xl">{project.projectName || project.brand}</DialogTitle>
              {project.description && <DialogDescription id={`realization-description-${project.id}`} className="mt-2 text-sm leading-relaxed text-[#69616f]">
                {project.description}
              </DialogDescription>}
            </div>
            <DialogClose className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f4ecf9] text-[#791bdd] hover:bg-[#eaddf2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#841add]" aria-label="Zavřít detail realizace"><X className="h-5 w-5" /></DialogClose>
          </div>

          <div className="px-4 pb-6 md:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-[#f5eff9]">
              {photo ? (
                <div
                  className="relative flex aspect-[4/3] items-center justify-center outline-none md:aspect-[16/9]"
                  tabIndex={0}
                  role="region"
                  aria-label="Fotogalerie realizace; použijte šipky pro přepnutí fotografie"
                  onKeyDown={(event) => {
                    if (photos.length < 2) return;
                    if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
                    if (event.key === "ArrowRight") { event.preventDefault(); next(); }
                  }}
                >
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-contain" />
                  {photos.length > 1 && <>
                    <button type="button" onClick={previous} aria-label="Předchozí fotografie" className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-[#e2d2eb] bg-white/95 text-[#841add] shadow-md"><ChevronLeft className="h-5 w-5" /></button>
                    <button type="button" onClick={next} aria-label="Další fotografie" className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-[#e2d2eb] bg-white/95 text-[#841add] shadow-md"><ChevronRight className="h-5 w-5" /></button>
                  </>}
                </div>
              ) : <div className="relative aspect-[4/3] md:aspect-[16/9]"><div className="absolute inset-0">{project.logo ? <RealizationBrandLogo project={project} /> : <RealizationPlaceholder brand={project.brand} />}</div></div>}
            </div>
            {photos.length > 0 && <p aria-live="polite" className="mt-3 text-center text-xs font-semibold text-[#6b6172]">Fotografie {index + 1} z {photos.length}</p>}
            {photos.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-3" aria-label="Výběr fotografie">
                {photos.map((item, position) => <button key={`${item.src}-${position}`} type="button" onClick={() => setIndex(position)} aria-label={`Zobrazit fotografii ${position + 1}`} aria-pressed={index === position} className={`h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${index === position ? "border-[#841add]" : "border-transparent hover:border-[#d7a7eb]"}`}><img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" /></button>)}
              </div>
            )}
          </div>

          {(project.brief || project.type || project.services.length > 0) && <div className="grid gap-6 px-6 pb-7 md:grid-cols-2 md:px-8">
            {(project.brief || project.type) && <div>{project.brief && <><h3 className="text-base font-bold text-[#302d36]">Zadání a realizace</h3><p className="mt-3 text-sm leading-relaxed text-[#69616f]">{project.brief}</p></>}{project.type && <p className="mt-4 text-sm font-semibold text-[#841add]">Typ realizace: {project.type}</p>}</div>}
            {project.services.length > 0 && <div><h3 className="text-base font-bold text-[#302d36]">Zajišťované služby</h3><ul className="mt-3 flex flex-wrap gap-2">{project.services.map((service) => <li key={service} className="rounded-full border border-[#e2d2eb] bg-[#faf6fd] px-3 py-2 text-sm text-[#64566e]">{service}</li>)}</ul></div>}
          </div>}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
