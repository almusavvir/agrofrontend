import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-3xl font-bold text-gray-800">
                            Agro DMS
                        </a>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Services
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                        <a
                            href="#"
                            className="ml-2 px-3 py-1 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                // Close icon
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Menu icon
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                        Home
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                        About
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                        Services
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                        Contact
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 text-center hover:bg-green-700"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}