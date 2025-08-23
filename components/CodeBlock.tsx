'use client';

import React from "react";
import {code} from "@/data/code";
import {CodeBlock} from "@/components/ui/code-block";

export const CodeBlocks = () => {

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="jsx"
                filename="AboutMe.jsx"
                highlightLines={[9, 13, 14, 18]}
                code={code}
            />
        </div>


    );
}

