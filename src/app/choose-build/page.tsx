import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.chooseBuild);

export default function ChooseBuildPage() {
  return <PageShell page={pages.chooseBuild} />;
}
