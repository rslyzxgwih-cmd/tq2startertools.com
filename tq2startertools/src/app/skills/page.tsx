import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.skills);

export default function SkillsPage() {
  return <PageShell page={pages.skills} />;
}
