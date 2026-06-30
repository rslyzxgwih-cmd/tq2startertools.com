import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { beginnerBuildFaqItems, pages } from "@/data/pages";

export const metadata = metadataFor(pages.beginnerBuilds);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: beginnerBuildFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function BeginnerBuildsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageShell page={pages.beginnerBuilds} />
    </>
  );
}
