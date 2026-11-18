import type { Metadata } from "next";
import Link from "next/link";
import GalleryBrowser from "./gallery-browser";

export const metadata: Metadata = {
  title: "Class Gallery | Prevailers Academia Star Ltd",
  description: "Browse real moments from live online classes at Prevailers Academia Star Ltd.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero gallery-hero"><div className="page-width"><div className="section-kicker light"><span className="red-dot" /> INSIDE OUR CLASSES</div><h1>See learning<br /><em>in action.</em></h1><p>Browse moments from our live online classes and get a feel for how learners join, practise, and take part from home.</p></div></section>
      <section className="class-gallery-section page-width" aria-labelledby="gallery-title"><div className="class-gallery-heading"><div><div className="section-kicker"><span className="red-dot" /> CLASS GALLERY</div><h2 id="gallery-title">A closer look at<br /><em>live learning.</em></h2></div><p>Select a photo to view it larger and browse through the gallery.</p></div><GalleryBrowser /></section>
      <section className="gallery-next"><div className="page-width gallery-next-inner"><div><div className="section-kicker"><span className="red-dot" /> WANT TO KNOW MORE?</div><h2>Explore the online experience.</h2></div><Link className="button button-dark" href="/online-learning">How online learning works <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
