type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <p className={`mb-5 text-xs font-extrabold uppercase tracking-[0.24em] ${light ? "text-blue-300" : "text-blue-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-7xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-7 max-w-2xl text-lg leading-relaxed md:text-xl ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
