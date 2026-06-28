import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.beginnerBuilds);

export default function BeginnerBuildsPage() {
  return <PageShell page={pages.beginnerBuilds} />;
}
