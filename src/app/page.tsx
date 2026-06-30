import { PageShell } from "@/components/page-shell";
import { metadataFor } from "@/data/metadata";
import { homeFaqItems, pages } from "@/data/pages";

export const metadata = metadataFor(pages.home);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageShell page={pages.home} />
    </>
  );
}
