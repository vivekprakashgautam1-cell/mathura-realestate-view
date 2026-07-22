"use client";

import * as React from "react";
import Image from "next/image";

export function PropertyGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = React.useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-dark text-5xl text-white/70">
        🏠
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-light">
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              className={`relative size-16 shrink-0 overflow-hidden rounded-md border-2 ${i === active ? "border-gold" : "border-transparent"}`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
