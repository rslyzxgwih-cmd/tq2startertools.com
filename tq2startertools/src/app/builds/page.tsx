import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.builds);

export default function BuildsPage() {
  return <PageShell page={pages.builds} />;
}
