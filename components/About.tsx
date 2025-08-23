"use client";
import { motion, useReducedMotion } from "framer-motion";
import { CodeBlocks } from "@/components/CodeBlock";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { CounterGrid } from "@/components/CounterCard";

export const About = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <section
            id="about"
            className="px-4 py-12 md:px-12 bg-gradient-to-b from-[#0c0f14] to-[#151a23] text-white antialiased relative"
        >
            <SectionHeading title="ABOUT ME" />

            <motion.div
                variants={shouldReduceMotion ? undefined : fadeUp}
                initial={shouldReduceMotion ? undefined : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "show"}
                viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
            >
                <TextAnimate className="text-gray-200 px-2 md:px-12 text-2xl text-center mb-16">
                    I am a Computer Science student specializing in web development.
                    Passionate about programming, AI integration, and building innovative web applications!
                </TextAnimate>
            </motion.div>

            <div className="flex flex-col md:flex-row md:justify-between gap-12 md:mx-16">
                <div className="md:w-1/2 w-full space-y-6">
                    <blockquote className="text-base md:text-lg italic text-zinc-400/90 mb-4 border-l border-zinc-700 pl-4">
                        “Great apps don’t just look good — they load fast, work everywhere, and feel intuitive.”
                    </blockquote>
                    <motion.p
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        initial={shouldReduceMotion ? undefined : "hidden"}
                        whileInView={shouldReduceMotion ? undefined : "show"}
                        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
                        className="text-lg leading-relaxed text-gray-200"
                    >
                        I’m a <strong>Frontend Developer</strong> focused on building fast, accessible and maintainable web apps with{" "}
                        <strong>Next.js, TypeScript and Tailwind CSS</strong>. I enjoy turning ideas into products by combining clean UI with solid backend logic.
                        <br /><br />
                        My long-term goal is to grow as a <strong>Full-Stack Engineer</strong>, owning features from design to deployment.
                        <br /><br />
                        Outside of coding, I enjoy <strong>model building</strong> — it keeps me detail-oriented and reminds me of the joy of creating.
                    </motion.p>

                    <CounterGrid />
                </div>

                <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="rounded-xl shadow-lg overflow-hidden max-w-full border border-gray-700 h-fit">
                        <CodeBlocks />
                    </div>
                </motion.div>
            </div>
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};
