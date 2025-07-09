import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <h1 className=" text-6xl font-extrabold gradient-title mb-4">404</h1>
            <p className="mt-4 text-2xl text-gray-400">Page not found</p>
            <Link href="/" className="mt-6 text-blue-500 hover:text-blue-700">
                Go back to Home
            </Link>
        </div>
    )
}
