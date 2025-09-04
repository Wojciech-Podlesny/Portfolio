
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
    children: React.ReactNode;
}
const ThemeProvider = ({children}:ThemeProviderProps) => (
    <NextThemesProvider attribute="class">{children}</NextThemesProvider>
)

export default ThemeProvider
