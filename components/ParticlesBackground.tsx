"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },

                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                },
            },
            particles: {
                color: {
                    value: theme === "dark" ? "#ffffff" : "#000000",
                },
                links: {
                    color: theme === "dark" ? "#888888" : "#444444",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: { default: OutMode.out },
                    speed: 1,

                },
                number: {
                    density: { enable: true, area: 800 },
                    value: 60,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 4 } },

            },
            detectRetina: true,
        }),
        [theme],
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 -z-0 pointer-events-none"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
 };




// "use client";
//
// import { useEffect, useState, useMemo } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
//
// export const ParticlesBackground = () => {
//     const [init, setInit] = useState(false);
//
//     useEffect(() => {
//         initParticlesEngine(async (engine) => {
//             // Ładujemy "slim" bundle (najlżejsza wersja)
//             await loadSlim(engine);
//         }).then(() => {
//             setInit(true);
//         });
//     }, []);
//
//     const particlesLoaded = async (container?: Container): Promise<void> => {
//         console.log("Particles loaded:", container);
//     };
//
//     // 🔹 Twój config przerobiony na useMemo
//     const particlesConfig: ISourceOptions = useMemo(
//         () => ({
//             detectRetina: true,
//             fpsLimit: 120,
//             fullScreen: { enable: true }, // pokrywa całą stronę
//             background: { color: "transparent" },
//             particles: {
//                 number: {
//                     value: 40,
//                     limit: 80,
//                     density: { enable: true, width: 800, height: 800 },
//                 },
//                 color: {
//                     value: ["#c912ed", "#00bfff", "#22dd22", "#ffd500", "#ff8000", "#ff2600"],
//                 },
//                 shape: {
//                     type: "circle",
//                     stroke: { width: 0, color: "#000" },
//                     polygon: { sides: 5 },
//                 },
//                 opacity: {
//                     value: 0.9,
//                     random: false,
//                 },
//                 size: {
//                     value: 2,
//                     random: { enable: true, minimumValue: 2 },
//                 },
//                 links: {
//                     enable: true,
//                     distance: 75,
//                     color: "#999999",
//                     opacity: 0.9,
//                     width: 1,
//                 },
//                 move: {
//                     enable: true,
//                     speed: 1.5,
//                     direction: "none",
//                     random: false,
//                     straight: false,
//                     outMode: "bounce",
//                 },
//             },
//             interactivity: {
//                 detectsOn: "window",
//                 events: {
//                     onHover: { enable: true, mode: "repulse" },
//                     onClick: { enable: true, mode: "push" },
//                     resize: true,
//                 },
//                 modes: {
//                     attract: { distance: 400, duration: 1, speed: 5 },
//                     bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8 },
//                     grab: { distance: 400, links: { opacity: 1 } },
//                     push: { quantity: 3 },
//                     remove: { quantity: 2 },
//                     repulse: { distance: 100, duration: 1 },
//                 },
//             },
//         }),
//         [],
//     );
//
//     if (!init) return null;
//
//     return (
//         <Particles
//             id="tsparticles"
//             className="fixed inset-0 -z-0 pointer-events-none"
//             particlesLoaded={particlesLoaded}
//             options={particlesConfig}
//         />
//     );
// };
