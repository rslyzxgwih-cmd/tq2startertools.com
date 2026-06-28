import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.beginnerGuide);

export default function BeginnerGuidePage() {
  return <PageShell page={pages.beginnerGuide} />;
}
