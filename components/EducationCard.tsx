import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CourseDetailsAccordion } from "./CourseDetailsAccordion";

export const EducationCard = ({ item }: { item: any }) => {
    return (
        <Card className="bg-gray-800 text-white shadow-none border-none">
            <CardHeader className="flex flex-row items-center gap-4">
                <Image
                    src={item.img}
                    alt={item.title || item.school || "Education"}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div>
                    <CardTitle className="text-white text-lg">
                        {item.title || item.school}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                        {item.date}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="pt-2">
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                {item.type === "course" && <CourseDetailsAccordion item={item} />}
            </CardContent>
        </Card>
    );
};
