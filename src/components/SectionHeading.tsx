type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-4xl`}>
      <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b1cdb]">
        <span className="brand-gradient h-2 w-2 rounded-full shadow-[0_0_18px_rgba(194,8,235,.5)]" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#292832] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-relaxed text-[#666371] md:text-lg ${align === "center" ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
