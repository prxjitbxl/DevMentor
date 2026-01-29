import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, CheckCircle, Activity, FileText, ChevronRight } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 text-[#1d1d1f] overflow-x-hidden selection:bg-yellow-400 selection:text-black">

            {/* Header Section (Apple Store Style) */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black dark:text-white mb-2">
                        DevMentor <span className="text-gray-500 dark:text-gray-400">AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#6e6e73] font-medium leading-tight max-w-xl">
                        The best way to build better software. <br className="hidden md:block" />
                        <span className="text-black dark:text-white">Powered by intelligence.</span>
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 mb-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">Need Help?</p>
                    <a href="#" className="text-sm font-normal text-[#0066cc] hover:underline flex items-center gap-1">
                        Ask a Specialist <span className="text-xs">↗</span>
                    </a>
                </div>
            </div>

            {/* Main Bento Grid / Carousel Area */}
            <div className="max-w-[1440px] mx-auto overflow-x-auto pb-16 pt-8 hide-scrollbar px-6 md:px-10">
                <div className="flex gap-8 min-w-max">

                    {/* Hero Card - Dark */}
                    <div className="w-[400px] md:w-[480px] h-[500px] bg-black rounded-[2rem] hover:rounded-[3rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:scale-105 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(250,204,21,0.3)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xl cursor-default border-2 border-transparent hover:border-yellow-500/20">
                        <div className="z-10 text-white">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider mb-2 block">New</span>
                            <h2 className="text-4xl font-semibold mb-2">Code Analysis</h2>
                            <p className="text-lg text-gray-400 font-medium">Deep insights instantly.</p>
                            <div className="mt-6 flex flex-col items-start gap-1">
                                <span className="text-sm text-gray-500">From 0ms latency</span>
                                <Link to="/analyze" className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-medium text-sm transition-colors">
                                    Run Analysis
                                </Link>
                            </div>
                        </div>
                        {/* Abstract UI representation */}
                        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 p-4 rotate-[-12deg] group-hover:rotate-[-8deg] transition-all duration-700 shadow-2xl">
                            <div className="space-y-2 opacity-60">
                                <div className="h-2 w-3/4 bg-yellow-500/50 rounded"></div>
                                <div className="h-2 w-full bg-gray-700 rounded"></div>
                                <div className="h-2 w-5/6 bg-gray-700 rounded"></div>
                                <div className="h-2 w-full bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Card 1 - Auto Docs */}
                    <div className="w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-[#1d1d1f] rounded-[2rem] hover:rounded-[3rem] p-8 flex flex-col relative overflow-hidden group hover:scale-105 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg cursor-default border-2 border-transparent hover:border-gray-200 dark:hover:border-neutral-700">
                        <div className="z-10">
                            <h2 className="text-4xl font-semibold mb-3 text-black dark:text-white">Auto-Docs.</h2>
                            <p className="text-xl font-medium text-[#1d1d1f] dark:text-gray-300">Documentation done.</p>
                            <p className="text-xl font-medium text-gray-400">Before you commit.</p>
                            <div className="mt-8 flex items-center gap-4">
                                <Link to="/analyze?tab=docs" className="text-blue-600 hover:underline flex items-center gap-1 font-medium">
                                    Try it now <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                            <FileText className="w-48 h-48 text-yellow-400 drop-shadow-2xl opacity-90 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Feature Card 2 - Impact Analysis (Always Dark with specific styling) */}
                    <Link to="/analyze?tab=impact" className="w-[350px] md:w-[400px] h-[500px] bg-[#1d1d1f] dark:bg-black rounded-[2rem] hover:rounded-[3rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:scale-105 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(250,204,21,0.2)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xl cursor-pointer border-2 border-transparent hover:border-yellow-500/10">
                        <div className="z-10">
                            <h2 className="text-3xl font-semibold mb-2 text-white">Impact Analysis.</h2>
                            <p className="text-lg text-gray-400 font-medium">See the ripple effect.</p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                            <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
                            <div className="absolute inset-4 border-2 border-yellow-500/40 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.5s]"></div>
                            <Activity className="absolute inset-0 m-auto w-16 h-16 text-yellow-500" />
                        </div>
                        <div className="z-10 bg-white/10 backdrop-blur-md self-start px-4 py-1.5 rounded-full border border-white/10">
                            <span className="text-sm text-yellow-500 font-semibold flex items-center gap-2">
                                Try Live Demo <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </Link>

                    {/* Feature Card 3 - Ghost Write */}
                    <div className="w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-[#1d1d1f] rounded-[2rem] hover:rounded-[3rem] p-8 flex flex-col relative overflow-hidden group hover:scale-105 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg cursor-default border-2 border-transparent hover:border-gray-200 dark:hover:border-neutral-700">
                        <div className="z-10">
                            <h2 className="text-3xl font-semibold mb-3 text-black dark:text-white">Ghost Write.</h2>
                            <p className="text-lg font-medium text-gray-500 dark:text-gray-300">AI Architect mode.</p>
                            <div className="mt-6">
                                <Link to="/ghost-write" className="px-5 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded-full font-medium text-sm transition-colors flex items-center gap-2">
                                    Start Building <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Code className="w-24 h-24 text-yellow-600" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Quick Links Section */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-10">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Links. <span className="text-gray-400">Get started fast.</span></h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Javascript', 'Python', 'Java', 'Cpp'].map((lang) => (
                        <Link
                            key={lang}
                            to={`/analyze?lang=${lang.toLowerCase()}`}
                            className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-neutral-700 flex items-center gap-3 group"
                        >
                            <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                                <Zap className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:text-black" />
                            </div>
                            <span className="font-semibold text-sm text-gray-900 dark:text-gray-200 group-hover:translate-x-1 transition-transform">{lang} Analysis</span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
