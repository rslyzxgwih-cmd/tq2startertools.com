import Link from "next/link";

const footerGroups = [
  {
    id: "core",
    title: "Core Decisions",
    items: [
      { label: "Choose a build", href: "/choose-build/" },
      { label: "Beginner builds", href: "/builds/beginner/" },
      { label: "Class picker", href: "/class-picker/" }
    ]
  },
  {
    id: "guides",
    title: "Guides",
    items: [
      { label: "Beginner guide", href: "/guides/beginner/" },
      { label: "Class direction", href: "/classes/" },
      { label: "Skill choices", href: "/skills/" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-4">
        {footerGroups.map((group) => (
          <section key={group.id} aria-labelledby={`footer-${group.id}`}>
            <h2 id={`footer-${group.id}`} className="text-sm font-semibold text-white">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section aria-labelledby="footer-tools">
          <h2 id="footer-tools" className="text-sm font-semibold text-white">
            Tools
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/tools/">Tools hub</Link>
            </li>
            <li>
              <span className="text-slate-500">Build planner reserved</span>
            </li>
            <li>
              <span className="text-slate-500">Search reserved</span>
            </li>
          </ul>
        </section>
        <section aria-labelledby="footer-status">
          <h2 id="footer-status" className="text-sm font-semibold text-white">
            Status
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Early-access MVP. Official game data is still treated as unstable; pages use provisional
            decision guidance until verified data is available.
          </p>
        </section>
      </div>
    </footer>
  );
}
