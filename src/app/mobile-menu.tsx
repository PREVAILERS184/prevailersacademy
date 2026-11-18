"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MenuLink = { href: string; label: string };

export default function MobileMenu({ links }: { links: MenuLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const desktopView = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktopView.matches) setOpen(false);
    };
    desktopView.addEventListener("change", closeOnDesktop);
    return () => desktopView.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className={`mobile-nav${open ? " is-open" : ""}`}>
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav-trigger"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
      >
        <span>Menu</span>
        <span className="mobile-nav-icon" aria-hidden="true"><i /><i /><i /></span>
      </button>
      <div className="mobile-nav-layer">
        <button type="button" className="mobile-nav-backdrop" aria-label="Close navigation menu" tabIndex={-1} onClick={closeMenu} />
        <aside
          ref={panelRef}
          id="mobile-nav-panel"
          className="mobile-nav-panel"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal={open}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="mobile-nav-top">
            <span>PREVAILERS / MENU</span>
            <button ref={closeRef} type="button" className="mobile-nav-close" aria-label="Close navigation menu" onClick={closeMenu}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
            </button>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={link.href === "/enroll" ? "mobile-nav-enroll" : undefined}
                onClick={closeMenu}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{link.label}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </Link>
            ))}
          </nav>
          <p className="mobile-nav-foot">LEARNING BEYOND BORDERS</p>
        </aside>
      </div>
    </div>
  );
}
