import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

export default function NotFound() {
  return (
    <section className="grid min-h-[70svh] place-items-center bg-slate-100 px-5 py-20">
      <PageMeta title="Stránka nenalezena | Events CZ/SK" description="Požadovaná stránka nebyla nalezena." />
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-blue-600">Chyba 404</p>
        <h1 className="mt-5 text-6xl font-black tracking-[-0.06em] text-slate-950 sm:text-8xl">Tady nic není.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate-600">Požadovanou stránku se nepodařilo najít. Vraťte se na úvod.</p>
        <Link to="/" className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"><ArrowLeft className="h-5 w-5" /> Zpět na úvod</Link>
      </div>
    </section>
  );
}
