// import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { FaCheckCircle } from "react-icons/fa";
//
// export function FeaturesGrid({ features }: { features: string[] }) {
//     if (!features?.length) return null;
//     return (
//         <section>
//             <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
//             <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {features.map((feature, i) => (
//                     <Card key={i} className="bg-gray-800/60 border border-gray-700 hover:bg-gray-800 transition">
//                         <CardHeader className="p-5 flex items-start gap-3">
//                             <div className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shrink-0">
//                                 <FaCheckCircle className="text-emerald-400" />
//                             </div>
//                             <CardTitle className="text-white leading-relaxed break-words">{feature}</CardTitle>
//                         </CardHeader>
//                     </Card>
//                 ))}
//             </div>
//         </section>
//     );
// }

//dark
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function FeaturesGrid({ features }: { features: string[] }) {
    if (!features?.length) return null;

    return (
        <section>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Key Features
            </h3>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, i) => (
                    <Card
                        key={i}
                        className="bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <CardHeader className="p-5 flex items-start gap-3">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center shrink-0">
                                <CheckCircle className="text-emerald-500 dark:text-emerald-400" />
                            </div>

                            <CardTitle className="text-gray-900 dark:text-white leading-relaxed break-words">
                                {feature}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}
