import { ArrowLeft, CircleAlert } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

export default function NotFound() {
  return (
    <section className="soft-festival-bg relative grid min-h-[70svh] place-items-center overflow-hidden px-5 py-20">
      <PageMeta title="Stránka nenalezena | Events CZ/SK" description="Požadovaná stránka nebyla nalezena." />
      <div aria-hidden="true" className="brand-gradient absolute h-72 w-72 rounded-full opacity-10 blur-3xl" />
      <div className="relative text-center"><p className="flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-[0.24em] text-[#7b1cdb]"><CircleAlert className="h-4 w-4" /> Chyba 404</p><h1 className="mt-5 text-6xl font-black tracking-[-0.06em] text-[#302d36] sm:text-8xl">Tady nic není.</h1><p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-[#666371]">Požadovanou stránku se nepodařilo najít. Vraťte se na úvod.</p><Link to="/" className="brand-gradient mt-9 inline-flex items-center gap-3 rounded-full px-6 py-4 font-bold text-white shadow-[0_14px_30px_rgba(109,26,228,.24)] transition-transform hover:-translate-y-1"><ArrowLeft className="h-5 w-5" /> Zpět na úvod</Link></div>
    </section>
  );
}
