import Image from "next/image";
import {Img} from "@/types/projects";



export function HeroMockup({ src, alt }: { src?: Img; alt: string }) {
    if (!src) return null;
    return (
        <div className="max-w-5xl mx-auto px-6 mb-16">
            <div className="relative mx-auto w-full rounded-2xl overflow-hidden h-[28rem] md:h-[40rem] bg-gray-900 ring-1 ring-white/10">
                <Image src={src} alt={alt} fill className="object-contain p-3 md:p-4"
                       sizes="(max-width: 768px) 100vw, 1280px" priority />
            </div>
        </div>
    );
}
