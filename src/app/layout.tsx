import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prevailers Academia Star Ltd | Online Tutoring",
  description: "Thoughtful online tutoring that helps learners build knowledge and confidence, wherever they are.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="page-width footer-top">
            <div><div className="footer-logo-crop"><Image src="/prevailers-logo-transparent.png" alt="Prevailers Academia Star Ltd logo" width={520} height={347} /></div><p>Learning beyond borders.</p></div>
            <nav aria-label="Footer navigation">
              <div><strong>Explore</strong><Link href="/">Home</Link><Link href="/programs">Programs</Link><Link href="/online-learning">Online learning</Link><Link href="/gallery">Class gallery</Link></div>
              <div><strong>Academy</strong><Link href="/about">About us</Link><Link href="/enroll">Enroll now</Link></div>
            </nav>
          </div>
          <div className="page-width footer-bottom"><span>© Prevailers Academia Star Ltd</span><span>Online tutoring, wherever you are.</span></div>
        </footer>
      </body>
    </html>
  );
}
