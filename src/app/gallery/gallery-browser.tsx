"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { classPhotos } from "./photos";

export default function GalleryBrowser() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeIndex !== null && dialog && !dialog.open) dialog.showModal();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        setActiveIndex((current) => current === null ? null : (current + direction + classPhotos.length) % classPhotos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const photo = activeIndex === null ? null : classPhotos[activeIndex];
  const move = (direction: number) => setActiveIndex((current) => current === null ? null : (current + direction + classPhotos.length) % classPhotos.length);

  return (
    <>
      <div className="class-gallery-grid">
        {classPhotos.map((item, index) => (
          <button className="class-gallery-card" key={item.src} type="button" onClick={() => setActiveIndex(index)} aria-label={`View photo ${index + 1}: ${item.title}`}>
            <span className="class-gallery-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /></span>
            <span className="class-gallery-card-copy"><small>{String(index + 1).padStart(2, "0")} / LIVE CLASS</small><strong>{item.title}</strong><span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>

      <dialog className="gallery-dialog" ref={dialogRef} onClose={() => setActiveIndex(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} aria-labelledby="gallery-dialog-title">
        {photo && (
          <div className="gallery-dialog-inner">
            <button type="button" className="gallery-close" onClick={() => dialogRef.current?.close()} aria-label="Close photo">×</button>
            <div className="gallery-dialog-image">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 80vw" />
              <button type="button" className="gallery-arrow gallery-arrow-prev" onClick={() => move(-1)} aria-label="Previous photo" title="Previous photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button>
              <button type="button" className="gallery-arrow gallery-arrow-next" onClick={() => move(1)} aria-label="Next photo" title="Next photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button>
            </div>
            <div className="gallery-dialog-details">
              <div><small>{String(activeIndex! + 1).padStart(2, "0")} / {String(classPhotos.length).padStart(2, "0")}</small><h2 id="gallery-dialog-title">{photo.title}</h2><p>{photo.caption}</p></div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
