import type { ReactNode } from "react";
import { ButtonRow, type Cta } from "@/components/ui";

export type PageDefinition = {
  title: string;
  description: string;
  breadcrumb: string;
  hero: {
    id: string;
    eyebrow?: string;
    title: string;
    afterTitle?: ReactNode;
    body: string;
    ctas: Cta[];
    aside?: ReactNode;
  };
  content: ReactNode;
};

export function PageShell({ page }: { page: PageDefinition }) {
  const hasAside = Boolean(page.hero.aside);

  return (
    <main id="main">
      <div className="mx-auto max-w-6xl px-5 py-5 text-sm text-slate-400" aria-label="Breadcrumb">
        {page.breadcrumb}
      </div>
      <section
        className={
          hasAside
            ? "mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.2fr_0.8fr]"
            : "mx-auto max-w-6xl px-5 py-12"
        }
        aria-labelledby={page.hero.id}
      >
        <div>
          {page.hero.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{page.hero.eyebrow}</p>
          ) : null}
          <h1
            id={page.hero.id}
            className={hasAside ? "mt-4 text-4xl font-bold leading-tight text-white md:text-6xl" : "text-4xl font-bold leading-tight text-white md:text-5xl"}
          >
            {page.hero.title}
          </h1>
          {page.hero.afterTitle}
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{page.hero.body}</p>
          <ButtonRow ctas={page.hero.ctas} />
        </div>
        {page.hero.aside}
      </section>
      {page.content}
    </main>
  );
}
