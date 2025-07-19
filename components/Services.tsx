'use client';

import React from 'react';
import { Button } from '@/components/ui/moving-border';
import {services} from "@/data/services";
import {SectionUseTechnologies} from "@/components/SectionUseTechnologies";

export const Services = () => {
    return (
        <div className="py-20 w-full px-4 md:px-10 bg-gray-900">
            <div className="flex items-center justify-center my-8">
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]"/>
                <h1 className="text-white px-12 text-4xl">SERVICES</h1>
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]"/>
            </div>
            <h1 className="text-gray-300 p-12 text-2xl text-center">I offer a range of services
                to help you build and maintain your web applications</h1>


            <div className="flex justify-center items-center flex-wrap mt-12 gap-10">
                {services.map((service) => (
                    <Button
                        key={service.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                            borderRadius: '1.68rem',
                        }}
                        className="w-full h-full text-white border-neutral-200 dark:border-slate-800 transition-transform hover:scale-[1.02] flex items-center justify-start text-left"
                    >
                        <div className="flex items-center p-6 w-full h-full">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <h2 className="flex text-lg font-semibold mb-1r">
                                    {service.title}
                                </h2>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
            <h2 className="text-center text-4xl text-white mt-12">Technologies whose I used in projects</h2>
           <SectionUseTechnologies />
        </div>
    );
};