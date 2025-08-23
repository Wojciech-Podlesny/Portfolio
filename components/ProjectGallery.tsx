"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type Props = {
    images: StaticImageData[];   // np. project.image (tablica screenów)
    title?: string;
};

export default function ProjectGallery({ images, title = "Screenshot" }: Props) {
    const [index, setIndex] = useState(-1);
    const [loaded, setLoaded] = useState<Record<number, boolean>>({});

    if (!images?.length) return null;

    const slides = images.map((img, i) => ({
        src: img.src,
        alt: `${title} ${i + 1}`,
    }));

    return (
        <>
            <section aria-label="Screenshots" className="max-w-6xl mx-auto px-6">
                <div className="grid gap-4">
                    {/* Lead: niski, 16:9, nie dominuje strony */}
                    <button
                        type="button"
                        onClick={() => setIndex(0)}
                        className="block w-full group"
                        aria-label="Open main screenshot"
                    >
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-white/10 bg-gray-900">
                            <Image
                                fill
                                src={images[0]}
                                alt={`${title} 1`}
                                className={`object-contain transition-opacity duration-700 ${
                                    loaded[0] ? "opacity-100" : "opacity-0"
                                }`}
                                onLoad={() => setLoaded((s) => ({ ...s, 0: true }))}
                                placeholder="blur"
                                priority
                            />
                        </div>
                    </button>

                    {/* Miniatury: małe, równe, 4:3 */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {images.slice(1).map((img, i) => (
                                <button
                                    key={i + 1}
                                    type="button"
                                    onClick={() => setIndex(i + 1)}
                                    className="block w-full group"
                                    aria-label={`Open screenshot ${i + 2}`}
                                >
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10 bg-gray-900">
                                        <Image
                                            fill
                                            src={img}
                                            alt={`${title} ${i + 2}`}
                                            className={`object-cover transition-opacity duration-700 group-hover:scale-[1.02] ${
                                                loaded[i + 1] ? "opacity-100" : "opacity-0"
                                            }`}
                                            onLoad={() => setLoaded((s) => ({ ...s, [i + 1]: true }))}
                                            placeholder="blur"
                                            loading="lazy"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={slides}
                plugins={[Zoom]}
                carousel={{ imageFit: "contain", padding: 64, spacing: 0 }}
                controller={{ closeOnBackdropClick: true }}
            />
        </>
    );
}
