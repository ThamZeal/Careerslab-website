"use client";
import React from 'react';
import { ArrowRight, Check, Code, Laptop, Users, Mail, Phone, ExternalLink, Clock, Briefcase } from 'lucide-react';

// Simple SVG icon for handshake directly in this file
const HandshakeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M11 17l-1.5-3m3 3L9 8.2m3 8.8L9.8 9.5M13 17l2-3.5m-2 3.5l2.5-6M13 17l3-7.5M4.8 17.5H7l3.5-7.5L12 13l3-7.5L17 12l2-3.5h2.2" />
    </svg>
);

const CareersLabPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-white py-4 px-6 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="text-blue-600 font-bold text-2xl">CareersLab</span>
                        <span className="text-sm text-gray-500">at Thamzeal International</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                        <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
                        <a href="#talent" className="text-gray-700 hover:text-blue-600 transition-colors">For Talent</a>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                        Contact Now
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-32">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Build Your Tech Dream Team With Ease
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                        Reliable. Scalable. Project-Ready Talent – Powered by CareersLab at Thamzeal International.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
                            Request Talent
                        </button>
                        <button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md">
                            Learn More <ArrowRight className="ml-2 h-5 w-5 inline" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At CareersLab, we offer tailored staffing solutions that ensure you receive high-quality, trained, and ready-to-deploy tech professionals. Whether you're building an MVP, scaling a dev team, or need interim tech experts – we've got you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="rounded-lg border bg-white text-gray-900 shadow-sm border-t-4 border-t-blue-600">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                                    <Users className="mr-2 h-6 w-6 text-blue-600" />
                                    Staff Augmentation Services
                                </h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-4 text-gray-600">Interns, junior devs & experienced professionals</p>

                                <h4 className="font-semibold text-lg mb-2">Expertise in:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="mr-2 text-blue-600"><Code className="h-5 w-5" /></span>
                                        <span>Python Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-blue-600"><Code className="h-5 w-5" /></span>
                                        <span>Artificial Intelligence</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-blue-600"><Code className="h-5 w-5" /></span>
                                        <span>Full-Stack Web Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-blue-600"><Laptop className="h-5 w-5" /></span>
                                        <span>UI/UX Design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-blue-600"><Code className="h-5 w-5" /></span>
                                        <span>Cloud & DevOps (AWS, OCI)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border bg-white text-gray-900 shadow-sm border-t-4 border-t-blue-600">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                                    <span className="mr-2 h-6 w-6 text-blue-600"><HandshakeIcon /></span>
                                    Collaboration Models
                                </h3>
                            </div>
                            <div className="p-6 pt-0">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-blue-600"><Check className="h-5 w-5" /></span>
                                        <span>Short-Term Sprints</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-blue-600"><Check className="h-5 w-5" /></span>
                                        <span>Long-Term Contracts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-blue-600"><Check className="h-5 w-5" /></span>
                                        <span>Intern-to-Hire Pipelines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-blue-600"><Check className="h-5 w-5" /></span>
                                        <span>Dedicated Teams (Remote or Hybrid)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            We're here to support your vision with the right people at the right time. Let's discuss your requirements or explore ongoing collaboration opportunities.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Users className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Pre-Vetted Candidates</h3>
                            <p className="text-sm text-gray-300 text-center">Trained for real-world demands</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Clock className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">2–5 Days Deployment Time</h3>
                            <p className="text-sm text-gray-300 text-center">Quick onboarding to meet your schedule</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Briefcase className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Fully Managed Lifecycle</h3>
                            <p className="text-sm text-gray-300 text-center">From onboarding to delivery</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <ArrowRight className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Flexible Scaling</h3>
                            <p className="text-sm text-gray-300 text-center">Based on your product or sprint cycle</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Check className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">NDAs & Data Compliance</h3>
                            <p className="text-sm text-gray-300 text-center">Guaranteed security and confidentiality</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We're here to support your vision with the right people at the right time. Let's discuss your requirements or explore ongoing collaboration opportunities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="bg-gray-100 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Collaboration Inquiry</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tell us about your requirements"
                                        className="w-full min-h-[80px] h-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="bg-blue-600 text-white p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Request Talent</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white/20 border-white/20 text-white placeholder:text-white/70 rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white/20 border-white/20 text-white placeholder:text-white/70 rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Position You're Hiring For"
                                        className="w-full bg-white/20 border-white/20 text-white placeholder:text-white/70 rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Job Requirements"
                                        className="w-full min-h-[80px] h-32 bg-white/20 border-white/20 text-white placeholder:text-white/70 rounded-md border px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">
                                    Post Job <ArrowRight className="ml-2 h-4 w-4 inline" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talent CTA Section */}
            <section id="talent" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join CareersLab – For Talent</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Are you a tech enthusiast, student, or experienced dev ready to work on real projects?
                    </p>
                    <button className="px-8 py-6 text-blue-600 text-lg font-medium bg-white rounded-md hover:bg-gray-100">
                        Apply Now – Join Talent Pool
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">CareersLab</h3>
                            <p className="text-gray-300">
                                Powered by Thamzeal International. Building tech dream teams for businesses worldwide.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>Staff Augmentation</li>
                                <li>Tech Recruitment</li>
                                <li>Intern Placement</li>
                                <li>Team Building</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                                <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a></li>
                                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <Mail className="h-5 w-5 mr-2 text-blue-400" />
                                    <span>careers@thamzeal.com</span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="h-5 w-5 mr-2 text-blue-400" />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center">
                                    <ExternalLink className="h-5 w-5 mr-2 text-blue-400" />
                                    <a href="https://thamzeal.com" className="hover:text-blue-400 transition-colors">
                                        thamzeal.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} CareersLab at Thamzeal International. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CareersLabPage;