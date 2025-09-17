"use client";

import { useState, useEffect } from "react";
import { Camera, Calendar, Heart } from "lucide-react";

type FormDataType = {
    name: string;
    phone: string;
    email: string;
    date?: string;
    service: string;
    location: string;
    budget?: string;
    requirements: string;
};

export default function BookNowPage() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data: FormDataType = Object.fromEntries(formData) as FormDataType;

        if (!/^[a-zA-Z\s]{3,}$/.test(data.name)) {
            setError("Name must be at least 3 letters.");
            setIsSubmitting(false);
            return;
        }
        if (!/^\d{10}$/.test(data.phone)) {
            setError("Phone number must be 10 digits.");
            setIsSubmitting(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError("Please enter a valid email address.");
            setIsSubmitting(false);
            return;
        }
        if (data.date) {
            const today = new Date().toISOString().split("T")[0];
            if (data.date < today) {
                setError("Shoot date must be today or in the future.");
                setIsSubmitting(false);
                return;
            }
        }
        if (!data.service) {
            setError("Please select a service.");
            setIsSubmitting(false);
            return;
        }
        if (!data.location.trim()) {
            setError("Please enter the shoot location.");
            setIsSubmitting(false);
            return;
        }
        if (!data.requirements.trim()) {
            setError("Please tell us about your requirement.");
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });
            if (res.ok) setSubmitted(true);
            else setError("Something went wrong. Please try again.");
        } catch {
            setError("Network error. Please try again.");
        }
        setIsSubmitting(false);
    }

    return (
        <div
            style={{
                backgroundImage: "url('/booknow/IMG_0380.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className={`relative flex flex-col md:flex-row  bg-opacity-70 px-6 py-10 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } transition-all duration-700 ease-out`}
        >
            {/* Transparent overlay for darker bg */}
            <div className="absolute inset-0 bg-black opacity-70 -z-10" />

            {/* Left Text Section */}
            <section className="md:w-1/2 flex ml-10 flex-col justify-center px-16 text-white relative z-40 drop-shadow-lg">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    Book Your Special Moments
                </h1>
                <h3 className="text-blue-400 font-semibold mb-6">
                    Capture emotions that last forever
                </h3>
                <p className="text-gray-300 text-lg max-w-lg mb-10 drop-shadow-md">
                    At <span className="text-blue-400 font-semibold">Blueye Studio</span>, we capture your memories with passion and creativity.
                </p>
                <div className="flex gap-14 drop-shadow-md mb-14">
                    {[{ Icon: Camera, label: "Professional" }, { Icon: Calendar, label: "Flexible" }, { Icon: Heart, label: "Personalized" }].map(({ Icon, label }) => (
                        <div key={label} className="flex flex-col items-center space-y-2">
                            <Icon className="w-14 h-14 text-blue-400" />
                            <span className="font-semibold text-lg text-gray-300">{label}</span>
                        </div>
                    ))}
                </div>

                <blockquote className="italic max-w-md text-gray-400 border-l-4 border-blue-600 pl-5">
                    “Blueye Studio made our day extra special with their amazing shots and professional approach. Highly recommend!”
                    <footer className="mt-4 text-gray-500 font-semibold">— Syam N.</footer>
                </blockquote>
            </section>

            {/* Right Form Section */}
            <section className="md:w-1/2 relative z-30 flex items-center justify-center">
                <div
                    className="w-full max-w-2xl mr-20 rounded-3xl p-14 transition-transform duration-500 hover:scale-[1.05] relative"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    }}
                >
                    {submitted ? (
                        <div className="text-center text-white">
                            <h2 className="text-4xl font-bold mb-5">🎉 Thank You!</h2>
                            <p className="mb-10 text-lg text-gray-300">
                                Your booking has been received! We’ll contact you shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="bg-blue-400 hover:bg-blue-500 text-black font-bold px-10 py-4 rounded-xl transition"
                            >
                                Book Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    className="input"
                                    autoComplete="off"
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    required
                                    className="input"
                                />
                            </div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                required
                                className="input"
                                autoComplete="off"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <select
                                    name="service"
                                    required
                                    className="input "
                                >
                                    <option value="">Select Service</option>
                                    <option value="wedding">Wedding Photography</option>
                                    <option value="birthday">Birthday Event</option>
                                    <option value="fashion">Fashion Shoot</option>
                                    <option value="portfolio">Portfolio</option>
                                </select>
                                <input name="date" type="date" className="input" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="Shoot Location"
                                    required
                                    className="input"
                                />
                                <input
                                    name="budget"
                                    type="text"
                                    placeholder="Budget Range (Optional)"
                                    className="input"
                                />
                            </div>
                            <textarea
                                name="requirements"
                                placeholder="Tell us about your requirement..."
                                rows={4}
                                required
                                className="input resize-none"
                            ></textarea>
                            {error && <p className="text-blue-400 text-md font-semibold">{error}</p>}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="block mx-auto px-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-extrabold py-4 rounded-xl transition disabled:opacity-50"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Booking"}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <style jsx>{`
        .input {
          @apply block w-full rounded-lg border border-gray-600 px-6 py-4 text-gray-900 placeholder-gray-400 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 transition;
        }
      `}</style>
        </div>
    );
} 