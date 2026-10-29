import { RealizationPlaceholder } from "@/components/RealizationDetail";
import { RealizationPhoto } from "@/data/realizations";

export default function RealizationCollage({ photos, brand }: { photos: RealizationPhoto[]; brand: string }) {
  if (!photos.length) return <RealizationPlaceholder brand={brand} />;

  const visible = photos.slice(0, 5);
  const layout = visible.length === 1
    ? "grid-cols-1 grid-rows-1"
    : visible.length === 2
      ? "grid-cols-2 grid-rows-1"
      : visible.length <= 4
        ? "grid-cols-2 grid-rows-2"
        : "grid-cols-3 grid-rows-2";

  return (
    <div className={`grid h-full w-full gap-1 ${layout}`}>
      {visible.map((photo, index) => (
        <div key={`${photo.src}-${index}`} className={`relative min-h-0 min-w-0 overflow-hidden ${index === 0 && (visible.length === 3 || visible.length === 5) ? "row-span-2" : ""}`}>
          <img src={photo.src} alt={photo.alt} width={960} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          {index === 4 && photos.length > 5 && (
            <span className="absolute inset-0 grid place-items-center bg-[#302d36]/60 text-2xl font-bold text-white" aria-label={`Další fotografie: ${photos.length - 5}`}>+{photos.length - 5}</span>
          )}
        </div>
      ))}
    </div>
  );
}
