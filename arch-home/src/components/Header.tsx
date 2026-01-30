import { Link } from "react-router-dom";

type NavItem = { label: string; to: string };

const leftNav: NavItem[] = [
  { label: "Our Why", to: "/#why" },
  { label: "The Process", to: "/#process" },
  { label: "Services", to: "/#services" },
];

const rightNav: NavItem[] = [
  { label: "Success Stories", to: "/#stories" },
  { label: "Blog", to: "/#blog" },
];

export function Header() {
  return (
    <header className=" h-20 absolute inset-x-0 top-0 z-50">
       <nav className="mx-auto flex h-full max-w-6xl items-center px-6 justify-between">
        {/* Left menu */}
        <ul className="hidden items-center gap-10 md:flex">
          {leftNav.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link to="/" className="flex flex-col items-center gap-1">
          <div className="text-[28px] font-extrabold tracking-[0.18em] text-white">
            HUSBAND
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/80">
            ARCHITECTS
          </div>
        </Link>

        {/* Right menu + CTA */}
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-10 md:flex">
            {rightNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-xs font-medium uppercase tracking-[0.22em] text-white/85 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            className="rounded-md bg-orange-500 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-sm hover:bg-orange-400"
          >
            Schedule a consultation
          </Link>

          {/* Mobile burger (optional) */}
          <button
            className="md:hidden rounded-md px-2 py-2 text-white/90 hover:text-white"
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
