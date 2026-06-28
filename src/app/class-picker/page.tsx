import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { pages } from "@/data/pages";

export const metadata = metadataFor(pages.classPicker);

export default function ClassPickerPage() {
  return <PageShell page={pages.classPicker} />;
}
