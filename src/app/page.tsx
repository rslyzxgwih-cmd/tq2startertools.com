import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.home);

export default function HomePage() {
  return <PageShell page={pages.home} />;
}
