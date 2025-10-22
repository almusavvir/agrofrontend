import React, { useState } from "react";

export default function LandingSection() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // replace with real auth action
        console.log({ email, password, remember });
    };

    return (
        <section className="relative">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/src/assets/indian-farm.jpg')" }}
                aria-hidden="true"
            />

            Fading overlay to improve foreground legibility
            <div className="absolute inset-0 bg-white/10 backdrop-blur-none" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-30">
                    {/* Left: Hero */}
                    <div className="flex-1 text-center lg:text-left backdrop-blur-2xl p-6 rounded-2xl shadow-lg bg-black/40">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-shadow-gray-950 leading-tight">
                            One Nation, One Scheme
                        </h1>
                        <p className="mt-4 max-w-xl text-white">
                            Streamline your operations with real-time analytics, crop insights,
                            and a dashboard made for growers. Sign in to access your farm's
                            performance at a glance.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
                            <a
                                href="#"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="inline-block bg-white text-green-600 hover:underline font-medium px-6 py-3 rounded-lg shadow"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    {/* Right: Login Panel */}
                    <div className="w-full max-w-md">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-semibold text-gray-900">Admin Login</h2>
                            <p className="mt-1 text-sm text-gray-600">Sign in to your account</p>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <label className="block">
                                    <span className="text-sm font-medium text-gray-700">Email</span>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-2 block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="you@example.com"
                                    />
                                </label>

                                <label className="block">
                                    <span className="text-sm font-medium text-gray-700">Password</span>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-2 block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="••••••••"
                                    />
                                </label>

                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <label className="inline-flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={remember}
                                            onChange={(e) => setRemember(e.target.checked)}
                                            className="h-4 w-4 text-green-600 border-gray-300 rounded"
                                        />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-green-600 hover:underline">
                                        Forgot?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg"
                                >
                                    Sign in
                                </button>
                            </form>

                            <div className="mt-5 pt-5 border-t border-gray-100 text-sm text-gray-600">
                                <p className="text-center">
                                    Don't have an account?{" "}
                                    <a href="#" className="text-green-600 font-medium hover:underline">
                                        Create account
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}