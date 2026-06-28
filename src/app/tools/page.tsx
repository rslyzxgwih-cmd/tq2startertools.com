import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.tools);

export default function ToolsPage() {
  return <PageShell page={pages.tools} />;
}
