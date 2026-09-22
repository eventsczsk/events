type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "h-10 w-[174px] md:h-11 md:w-[190px]" }: BrandLogoProps) {
  return (
    <svg
      viewBox="90 145 390 90"
      className={className}
      role="img"
      aria-label="Events CZ/SK"
      preserveAspectRatio="xMidYMid meet"
    >
      <image
        href="/assets/events-header.png"
        width="563"
        height="284"
        className="brand-logo"
      />
    </svg>
  );
}
