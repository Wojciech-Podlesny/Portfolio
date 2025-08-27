
import Link from "next/link"
const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center p-8">
            <h1 className="text-[2.5rem] text-white mb-6">404 - Page Not Found</h1>
            <Link
                href="/"
                className="text-xl text-white no-underline border-b-2 border-transparent transition hover:border-blue-500 hover:text-gray-400"
            >
                ← Back to Home
            </Link>
        </div>
    )
}

export default NotFound
