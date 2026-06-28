import Link from "next/link";
import type { ReactNode } from "react";

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type TableRow = {
  cells: ReactNode[];
};

const buttonClasses = {
  primary: "rounded bg-cyan-300 px-5 py-3 text-center font-semibold text-slate-950",
  secondary: "rounded border border-white/15 px-5 py-3 text-center font-semibold text-white"
};

export function ButtonLink({ cta }: { cta: Cta }) {
  return (
    <Link className={buttonClasses[cta.variant ?? "primary"]} href={cta.href}>
      {cta.label}
    </Link>
  );
}

export function ButtonRow({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {ctas.map((cta) => (
        <ButtonLink key={`${cta.label}-${cta.href}`} cta={cta} />
      ))}
    </div>
  );
}

export function Section({
  id,
  title,
  children,
  className = "mx-auto max-w-6xl px-5 py-10"
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className} aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-semibold text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Card({
  title,
  children,
  titleClassName = "font-semibold text-white"
}: {
  title?: ReactNode;
  children: ReactNode;
  titleClassName?: string;
}) {
  return (
    <article className="rounded border border-white/10 bg-white/5 p-5">
      {title ? <h3 className={titleClassName}>{title}</h3> : null}
      {children}
    </article>
  );
}

export function CardGrid({
  columns = "md:grid-cols-3",
  children,
  as = "div"
}: {
  columns?: string;
  children: ReactNode;
  as?: "div" | "ul" | "ol";
}) {
  const className = `mt-5 grid gap-4 ${columns}`;

  if (as === "ul") {
    return <ul className={className}>{children}</ul>;
  }

  if (as === "ol") {
    return <ol className={className}>{children}</ol>;
  }

  return <div className={className}>{children}</div>;
}

export function ListCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="rounded border border-white/10 bg-white/5 p-4">
      <strong className="text-white">{title}</strong>
      <p className="mt-2 text-sm text-slate-300">{children}</p>
    </li>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="text-cyan-300" href={href}>
      {children}
    </Link>
  );
}

export function InlineAction({ href, children, variant = "secondary" }: Cta & { children?: never }) {
  return (
    <Link className={buttonClasses[variant]} href={href}>
      {children}
    </Link>
  );
}

export function ComparisonTable({
  headers,
  rows
}: {
  headers: string[];
  rows: TableRow[];
}) {
  return (
    <div className="mt-5 overflow-x-auto rounded border border-white/10">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm">
        <thead className="bg-white/5 text-slate-200">
          <tr>
            {headers.map((header) => (
              <th className="p-4" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-slate-300">
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.cells.map((cell, cellIndex) => (
                <td
                  className={cellIndex === 0 ? "p-4 font-semibold text-white" : "p-4"}
                  key={`cell-${rowIndex}-${cellIndex}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DefinitionGrid({
  items
}: {
  items: Array<{ term: string; description: string }>;
}) {
  return (
    <dl className="mt-5 grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.term}>
          <dt className="text-sm text-slate-400">{item.term}</dt>
          <dd className="font-semibold text-white">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProsCons({
  id,
  strengths,
  weaknesses
}: {
  id: string;
  strengths: string[];
  weaknesses: string[];
}) {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 md:grid-cols-2" aria-labelledby={id}>
      <div className="rounded border border-white/10 bg-white/5 p-6">
        <h2 id={id} className="text-2xl font-semibold text-white">
          Strengths
        </h2>
        <BulletList items={strengths} />
      </div>
      <div className="rounded border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-semibold text-white">Weaknesses</h2>
        <BulletList items={weaknesses} />
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ConfidenceBox({ children }: { children: ReactNode }) {
  return <p className="mt-3 rounded border border-amber-300/30 bg-amber-300/10 p-5 text-amber-100">{children}</p>;
}
