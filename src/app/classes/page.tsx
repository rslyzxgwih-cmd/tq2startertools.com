import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.classes);

export default function ClassesPage() {
  return <PageShell page={pages.classes} />;
}
