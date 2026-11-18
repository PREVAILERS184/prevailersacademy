import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/online-learning", label: "Online learning" },
  { href: "/gallery", label: "Class gallery" },
  { href: "/about", label: "About us" },
  { href: "/enroll", label: "Enroll now" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="announcement-bar" aria-label="Enrollment announcement">
        <div className="announcement-track">
          <Link href="/enroll">ENROLL NOW <span aria-hidden="true">✦</span> YOUR LEARNING JOURNEY STARTS HERE <span aria-hidden="true">✦</span></Link>
          <Link href="/enroll" aria-hidden="true" tabIndex={-1}>ENROLL NOW <span>✦</span> YOUR LEARNING JOURNEY STARTS HERE <span>✦</span></Link>
          <Link href="/enroll" aria-hidden="true" tabIndex={-1}>ENROLL NOW <span>✦</span> YOUR LEARNING JOURNEY STARTS HERE <span>✦</span></Link>
        </div>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Prevailers home">
          <span className="logo-symbol" aria-hidden="true"><Image src="/prevailers-logo-transparent.png" alt="" width={200} height={133} /></span>
          <span className="brand-name">PREVAILERS <small>ACADEMIA STAR LTD</small></span>
        </Link>
        <div className="header-note"><span className="red-dot" /> LEARNING BEYOND BORDERS</div>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className={link.href === "/enroll" ? "nav-enroll" : undefined}>{link.label}</Link>)}
        </nav>
        <details className="mobile-menu">
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        </details>
      </header>
    </>
  );
}
