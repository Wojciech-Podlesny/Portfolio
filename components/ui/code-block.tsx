"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useTheme } from "next-themes";

type CodeBlockProps = {
    language: string;
    filename: string;
    highlightLines?: number[];
} & (
    | {
    code: string;
    tabs?: never;
}
    | {
    code?: never;
    tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
    }>;
}
    );

export const CodeBlock = ({
                              language,
                              filename,
                              code,
                              highlightLines = [],
                              tabs = [],
                          }: CodeBlockProps) => {
    const [copied, setCopied] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0);
    const { resolvedTheme } = useTheme();

    // Zapobiega migotaniu motywu przy SSR
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const tabsExist = tabs.length > 0;

    const copyToClipboard = async () => {
        const textToCopy = tabsExist ? tabs[activeTab].code : code;
        if (textToCopy) {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const activeCode = tabsExist ? tabs[activeTab].code : code;
    const activeLanguage = tabsExist ? tabs[activeTab].language || language : language;
    const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

    const isDark = resolvedTheme === "dark";
    const syntaxStyle = isDark ? atomDark : oneLight;
    const highlightBg = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
    const lineNumberStyle = { opacity: 0.6, minWidth: "2.25rem" };

    return (
        <div
            className={[
                "relative w-full rounded-lg p-4 font-mono text-sm border",
                "dark:bg-slate-900 dark:text-gray-100 dark:border-gray-700",
            ].join(" ")}
        >
            <div className="flex flex-col gap-2">
                {tabsExist ? (
                    <div className="flex items-center justify-between">
                        <div className="flex overflow-x-auto">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={[
                                        "px-3 py-2 text-xs transition-colors font-sans",
                                        index === activeTab
                                            ? "text-gray-900 dark:text-white"
                                            : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200",
                                    ].join(" ")}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors font-sans"
                            title="Copy code"
                        >
                            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center py-1">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{filename}</div>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors font-sans"
                            title="Copy code"
                        >
                            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                        </button>
                    </div>
                )}
            </div>

            <SyntaxHighlighter
                language={activeLanguage}
                style={syntaxStyle}
                customStyle={{
                    margin: 0,
                    padding: 0,
                    background: "transparent",
                    fontSize: "0.875rem",
                }}
                wrapLines
                showLineNumbers
                lineNumberStyle={lineNumberStyle}
                lineProps={(lineNumber) => ({
                    style: {
                        backgroundColor: activeHighlightLines.includes(lineNumber) ? highlightBg : "transparent",
                        display: "block",
                        width: "100%",
                    },
                })}
                PreTag="div"
            >
                {String(activeCode)}
            </SyntaxHighlighter>
        </div>
    );
};
