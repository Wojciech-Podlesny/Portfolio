import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const CourseDetailsAccordion = ({ item }: { item: any }) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="details">
                <AccordionTrigger className="text-sm">
                    Course Details
                </AccordionTrigger>
                <AccordionContent>
                    {item.modules && (
                        <div className="mb-3">
                            <p className="text-white font-medium text-sm mb-1">Modules:</p>
                            <ul className="list-disc pl-5 text-sm text-gray-300">
                                {item.modules.map((mod: any, i: number) => (
                                    <li key={i}>{mod.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {item.technologies && (
                        <div className="mb-2">
                            <p className="text-white font-medium text-sm mb-1">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech: any, i: number) => (
                                    <Badge key={i} variant="secondary" className="text-xs">
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                    {item.certificateUrl && (
                        <button className="mt-2 p-0 h-auto text-blue-400 text-sm">
                            <Link
                                href={item.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate
                            </Link>
                        </button>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
