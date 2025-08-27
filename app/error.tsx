"use client"

import { useEffect } from "react"

const Error = ({error, reset}: {
    error: Error & { digest?: string },
    reset: () => void
})=> {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-red-50 p-8 text-center">
            <h2 className="text-red-700 text-2xl mb-4">Something went wrong!</h2>
            <button
                onClick={reset}
                className="bg-red-500 text-white px-5 py-2 text-base rounded-md transition-colors hover:bg-red-600"
            >
                Try again
            </button>
        </div>
    )
}

export default Error