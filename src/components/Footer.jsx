import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
                    <div className="flex items-center space-x-3">
                        <svg
                            className="w-8 h-8 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
                        </svg>
                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                            Agro DMS
                        </span>
                    </div>
        
                    <nav className="flex items-center space-x-4">
                        <a href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Features
                        </a>
                        <a href="#pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Pricing
                        </a>
                        <a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            Contact
                        </a>
                    </nav>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} AgroFrontend — All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}