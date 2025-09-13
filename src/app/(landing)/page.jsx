"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Code, Laptop, Users, Mail, Phone, ExternalLink, Clock, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import Squares from '@/components/Squares/Squares';
import { client } from '@/sanity/client';


// Shared Web3Forms Access Key (same as Contact form)
const WEB3FORMS_ACCESS_KEY = "5f7a0df2-4f81-4bcd-aad9-49ce1c570f36"; // consider moving to env for production



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

// Testimonial data for carousel
const testimonials = [
    {
        id: 1,
        quote: "CareersLab helped us build our AI team in just 2 weeks. The candidates were pre-trained and ready to contribute from day one.",
        author: "Sarah Johnson",
        position: "CTO, TechNova Solutions",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "We've been working with CareersLab for over a year now. They consistently provide high-quality talent that fits our company culture.",
        author: "Michael Chen",
        position: "Engineering Manager, DataFlow Inc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "The flexible scaling option allowed us to quickly ramp up for our product launch and then scale back for maintenance mode.",
        author: "Priya Patel",
        position: "Product Director, LaunchPad",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
];

// Clients logos (using placeholders in public/ or external URLs)
const clients = [
    { name: 'Astute', logo: '/astute.png' },
    { name: 'Mooncoin', logo: '/mooncoin.webp' },
];


const Index =() => {
    // Job openings data
    const [jobOpenings, setJobOpenings] = useState([]);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            const query = `*[_type == "jobPost"]{
            jobTitle,
            locationType,
            workType,
            description,
            requirements,
            applyLink
        }`;
            const jobs = await client.fetch(query);
            setJobOpenings(jobs);
        };
        fetchJobOpenings();
    }, []);
    // State for testimonial carousel
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // State for job openings carousel with improved implementation
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const jobIntervalRef = useRef(null);

    // Function to move to the next testimonial slide
    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // Function to move to the previous testimonial slide
    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    // Function to move to the next job slide
    const nextJobSlide = () => {
        setCurrentJobIndex((prev) => (prev + 1) % jobOpenings.length);
    };

    // Function to move to the previous job slide
    const prevJobSlide = () => {
        setCurrentJobIndex((prev) => (prev - 1 + jobOpenings.length) % jobOpenings.length);
    };

    // Auto-advance testimonial carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    // Auto-advance job carousel with improved implementation
    useEffect(() => {
        // Clear any existing interval
        if (jobIntervalRef.current) {
            clearInterval(jobIntervalRef.current);
        }

        // Set new interval
        jobIntervalRef.current = window.setInterval(() => {
            nextJobSlide();
        }, 5000);

        // Clean up on unmount
        return () => {
            if (jobIntervalRef.current) {
                clearInterval(jobIntervalRef.current);
            }
        };
    }, [currentJobIndex]);

    return (
        <div className="min-h-screen bg-white scroll-smooth">
            {/* Navbar */}
            <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="text-[#065c9b] font-bold text-2xl">CareersLab</span>
                        <span className="text-sm text-gray-500">at Thamzeal International</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-[#065c9b] transition-colors">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-[#065c9b] transition-colors">Services</a>
                        <a href="#testimonials" className="text-gray-700 hover:text-[#065c9b] transition-colors">Testimonials</a>
                        <a href="#benefits" className="text-gray-700 hover:text-[#065c9b] transition-colors">Benefits</a>
                        <a href="#jobs" className="text-gray-700 hover:text-[#065c9b] transition-colors">Job Openings</a>
                        <a href="#contact" className="text-gray-700 hover:text-[#065c9b] transition-colors">Contact Us</a>
                        <a href="#talent" className="text-gray-700 hover:text-[#065c9b] transition-colors">For Talent</a>
                    </div>

                    <a href="#contact" className="bg-[#065c9b] hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
                        Contact Now
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            
            <section className="relative min-h-screen py-32 bg-black overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                    <Squares
                        speed={0.5}
                        squareSize={50}
                        direction="down"
                        borderColor="#222222"
                        hoverFillColor="#065c9b"
                    />
                </div>

                {/* Content layer */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Build Your Tech Dream Team With Ease
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                        Reliable. Scalable. Project-Ready Talent – Powered by CareersLab at Thamzeal International.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#jobs"
                            className="bg-[#065c9b] hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md transition duration-300"
                        >
                            View Open Positions
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md flex items-center justify-center transition duration-300"
                        >
                            Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Clients Logos Section */}
            <section id="clients" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Trusted by teams and brands</h2>
                        <p className="text-gray-600">Some of the organizations we’ve partnered with.</p>
                    </div>
                    <div className="mx-auto max-w-5xl flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
                        {clients.map((c) => (
                            <div key={c.name} className="flex items-center justify-center basis-1/2 sm:basis-1/3 md:basis-1/4 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                                <img
                                    src={c.logo}
                                    alt={`${c.name} logo`}
                                    className="h-12 md:h-16 w-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
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

                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        <div className="rounded-lg border bg-white text-gray-900 shadow-sm border-t-4 border-t-[#065c9b] hover:shadow-md transition-shadow">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                                    <Users className="mr-2 h-6 w-6 text-[#065c9b]" />
                                    Staff Augmentation Services
                                </h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="mb-4 text-gray-600">Interns, junior devs & experienced professionals</p>

                                <h4 className="font-semibold text-lg mb-2">Expertise in:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="mr-2 text-[#065c9b]"><Code className="h-5 w-5" /></span>
                                        <span>Python Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-[#065c9b]"><Code className="h-5 w-5" /></span>
                                        <span>Artificial Intelligence</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-[#065c9b]"><Code className="h-5 w-5" /></span>
                                        <span>Full-Stack Web Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-[#065c9b]"><Laptop className="h-5 w-5" /></span>
                                        <span>UI/UX Design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-[#065c9b]"><Code className="h-5 w-5" /></span>
                                        <span>Cloud & DevOps (AWS, OCI)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-lg border bg-white text-gray-900 shadow-sm border-t-4 border-t-[#065c9b] hover:shadow-md transition-shadow">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
                                    <span className="mr-2 h-6 w-6 text-[#065c9b]"><HandshakeIcon /></span>
                                    Collaboration Models
                                </h3>
                            </div>
                            <div className="p-6 pt-0">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-[#065c9b]"><Check className="h-5 w-5" /></span>
                                        <span>Short-Term Sprints</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-[#065c9b]"><Check className="h-5 w-5" /></span>
                                        <span>Long-Term Contracts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-[#065c9b]"><Check className="h-5 w-5" /></span>
                                        <span>Intern-to-Hire Pipelines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1 text-[#065c9b]"><Check className="h-5 w-5" /></span>
                                        <span>Dedicated Teams (Remote or Hybrid)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Carousel Section */}
            <section id="testimonials" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See what our clients have to say about working with CareersLab talent and how we've helped them build successful tech teams.
                        </p>
                    </div>

                    {/* Carousel Component */}
                    <div className="max-w-4xl mx-auto relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-gradient-to-tr from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                                                />
                                                <div>
                                                    <blockquote className="text-lg text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                                    <div className="text-[#065c9b]">{testimonial.position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#065c9b] hover:bg-blue-50 transition-colors z-10 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#065c9b] hover:bg-blue-50 transition-colors z-10 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-[#065c9b]' : 'w-2.5 bg-gray-300'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                ></button>
                            ))}
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
                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6 hover:transform hover:scale-105">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Users className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Pre-Vetted Candidates</h3>
                            <p className="text-sm text-gray-300 text-center">Trained for real-world demands</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6 hover:transform hover:scale-105">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Clock className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">2–5 Days Deployment Time</h3>
                            <p className="text-sm text-gray-300 text-center">Quick onboarding to meet your schedule</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6 hover:transform hover:scale-105">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Briefcase className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Fully Managed Lifecycle</h3>
                            <p className="text-sm text-gray-300 text-center">From onboarding to delivery</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6 hover:transform hover:scale-105">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <ArrowRight className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">Flexible Scaling</h3>
                            <p className="text-sm text-gray-300 text-center">Based on your product or sprint cycle</p>
                        </div>

                        <div className="rounded-md bg-white/10 border-none hover:bg-white/15 transition-all p-6 hover:transform hover:scale-105">
                            <div className="mb-4 text-blue-400 flex justify-center">
                                <Check className="h-10 w-10" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-center">NDAs & Data Compliance</h3>
                            <p className="text-sm text-gray-300 text-center">Guaranteed security and confidentiality</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Openings Section - Improved carousel implementation */}
            <section id="jobs" className="py-20 bg-blue-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Browse our current opportunities and find the perfect role for your skills and career goals. We're constantly adding new positions.
                        </p>
                    </div>

                    {/* Enhanced Job Carousel */}
                    <div className="max-w-3xl mx-auto relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentJobIndex * 100}%)` }}
                            >
                                {jobOpenings.map((job,index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#065c9b]">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.jobTitle}</h3>
                                            <div className="flex items-center text-gray-500 mb-4 space-x-4 flex-wrap">
                                                <span className="flex items-center">
                                                    <Briefcase className="h-4 w-4 mr-1" />
                                                    {job.workType}
                                                </span>
                                                <span>{job.locationType}</span>
                                            </div>
                                            <p className="text-gray-600 mb-6">{job.description}</p>
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Requirements:</h4>
                                                <ul className="space-y-2">
                                                    {job.requirements.map((req, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <span className="text-[#065c9b] mr-2">•</span>
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href={job.applyLink}
                                                    className="inline-flex items-center bg-[#065c9b] hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                                                >
                                                    Apply Now <ArrowRight className="ml-1 h-4 w-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Job Navigation Buttons */}
                        <button
                            onClick={prevJobSlide}
                            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 h-12 w-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#065c9b] hover:bg-blue-50 transition-colors z-10 focus:outline-none"
                            aria-label="Previous job"
                        >
                            <ChevronLeft className="h-7 w-7" />
                        </button>
                        <button
                            onClick={nextJobSlide}
                            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 h-12 w-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#065c9b] hover:bg-blue-50 transition-colors z-10 focus:outline-none"
                            aria-label="Next job"
                        >
                            <ChevronRight className="h-7 w-7" />
                        </button>

                        {/* Job Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {jobOpenings.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentJobIndex(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${index === currentJobIndex ? 'w-10 bg-[#065c9b]' : 'w-3 bg-gray-300'
                                        }`}
                                    aria-label={`Go to job ${index + 1}`}
                                ></button>
                            ))}
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

                    <div className="max-w-3xl mx-auto my-auto">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-[1.01]">
                            <h3 className="text-xl font-bold mb-4">Collaboration Inquiry</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Talent CTA Section */}
            <section id="talent" className="py-16 bg-gradient-to-r from-[#065c9b] to-blue-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join CareersLab – For Talent</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Are you a tech enthusiast, student, or experienced dev ready to work on real projects?
                    </p>
                    <a href="https://forms.gle/Riwq9eTkESy9d5Bm9" className="px-8 py-6 inline-block text-[#065c9b] text-lg font-medium bg-white rounded-md hover:bg-gray-100 transition duration-300">
                        Apply Now – Join Talent Pool
                    </a>
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
                                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                                <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a></li>
                                <li><a href="#jobs" className="hover:text-blue-400 transition-colors">Job Openings</a></li>
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
                                    <span>+91 95679 99717</span>
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

export default Index;

// ContactForm component using Web3Forms API
function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY); // Replace with your real key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <form className="space-y-4" onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065c9b]"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065c9b]"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065c9b]"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    placeholder="Tell us about your requirements"
                    required
                    className="w-full min-h-[80px] h-32 rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065c9b]"
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#065c9b] hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
                Submit Inquiry
            </button>
            <span className="block text-center text-sm mt-2">{result}</span>
        </form>
    );
}
