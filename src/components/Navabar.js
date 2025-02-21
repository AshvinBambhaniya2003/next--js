import Link from 'next/link';
import { FiHome, FiLogIn, FiUserPlus } from 'react-icons/fi';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-blue-600">YourLogo</span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300"
                        >
                            <FiHome className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        <Link
                            href="/sign-in"
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300"
                        >
                            <FiLogIn className="w-4 h-4" />
                            <span>Sign In</span>
                        </Link>
                        <Link
                            href="/sign-up"
                            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                        >
                            <FiUserPlus className="w-4 h-4" />
                            <span>Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
