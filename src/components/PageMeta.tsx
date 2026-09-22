import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    meta?.setAttribute("content", description);
  }, [title, description]);

  return null;
}
