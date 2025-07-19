"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {Timeline} from "@/components/ui/timeline";
import {experience} from "@/data/experience";

export const Experience = () => {
    const timelineData = experience.map((exp) => ({
        title: exp.role,
        content: (
            <Card className="bg-black text-white border-zinc-700 rounded-xl shadow-md px-6 py-8">
                <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <p className="text-sm text-gray-400 flex items-center mb-4">
                        📅 {exp.date}
                    </p>
                    <p className="italic text-gray-400 mb-3">Responsibilities</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {exp.highlights.slice(0, 3).map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        ),

    }));
    return (
        <section id="experience" className="w-full bg-black py-20">
            <Timeline data={timelineData} />
        </section>
    );
};

