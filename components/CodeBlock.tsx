'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export const CodeBlock = ({ code, language = 'javascript' }: CodeBlockProps) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg md:w-12/12 w-6/6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{ margin: 0, padding: '1rem', background: 'transparent' }}
                wrapLongLines
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
