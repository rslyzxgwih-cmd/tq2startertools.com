import Link from "next/link";

const navItems = [
  { label: "Choose Build", href: "/choose-build/" },
  { label: "Builds", href: "/builds/" },
  { label: "Classes", href: "/classes/" },
  { label: "Skills", href: "/skills/" },
  { label: "Guides", href: "/guides/beginner/" },
  { label: "Tools", href: "/tools/" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="text-base font-semibold tracking-wide text-white">
          Titan Quest 2 Starter Tools
        </Link>
        <ul className="flex flex-wrap gap-3 text-sm text-slate-300" aria-label="Primary decision areas">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="rounded border border-white/10 px-3 py-2" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
