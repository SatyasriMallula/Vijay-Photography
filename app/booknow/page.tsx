"use client";

import { useState } from "react";
import { Camera, Calendar, Heart } from "lucide-react";

export default function BookNowPage() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("")
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(""); // reset errors

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // ✅ Validations
        if (!/^[a-zA-Z\s]{3,}$/.test(data.name as string)) {
            setError("Name must be at least 3 letters.");
            return;
        }
        if (!/^\d{10}$/.test(data.phone as string)) {
            setError("Phone number must be 10 digits.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(data.email as string)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (data.date) {
            const today = new Date().toISOString().split("T")[0];
            if ((data.date as string) < today) {
                setError("Shoot date must be today or in the future.");
                return;
            }
        }
        if (!data.service) {
            setError("Please select a service.");
            return;
        }
        if (!(data.location as string)?.trim()) {
            setError("Please enter the shoot location.");
            return;
        }
        if (!(data.requirements as string)?.trim()) {
            setError("Please tell us about your requirement.");
            return;
        }

        const res = await fetch("/api/sendMail", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            setSubmitted(true);
            e.currentTarget.reset();
        } else {
            setError("Something went wrong. Please try again.");
        }
    }



    return (
        <div className="relative">
            {/* Gradient Hero Section */}
            <div
                className="text-center text-white px-6 py-20 space-y-6"
                style={{
                    background: "linear-gradient(to bottom right, #1e3a8a 20%, #0a192f 50%, #1e3a8a 90%)",
                }}
            >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Book Your Special Moments
                </h1>
                <p className="max-w-2xl mx-auto text-gray-200">
                    At <span className="text-amber-400 font-semibold">Blueye Studio</span>,
                    we capture the beauty of your memories with passion and creativity.
                </p>

                {/* Icons */}
                <div className="flex justify-center gap-10 mt-6 text-amber-400">
                    <div className="flex flex-col items-center">
                        <Camera className="w-10 h-10 mb-2" />
                        <span className="text-sm">Professional</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Calendar className="w-10 h-10 mb-2" />
                        <span className="text-sm">Flexible</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart className="w-10 h-10 mb-2" />
                        <span className="text-sm">Personalized</span>
                    </div>
                </div>
            </div>

            {/* Form Section - Overlap */}
            <div className=" bg-gradient-to-br from-[#0a192f]/70 to-[#1e3a8a]/70 backdrop-blur-xl animate-fade-in max-w-4xl mx-auto -mt-16 mb-16">
                <div className="rounded-2xl shadow-xl p-10 border border-amber-400">
                    <h2 className="text-2xl font-bold text-center mb-6">Book Now</h2>

                    {submitted ? (
                        <div className="text-center space-y-3 p-6 border border-green-300 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold text-green-700">🎉 Thank You!</h3>
                            <p className="">
                                We appreciate your interest in{" "}
                                <span className="font-semibold">Blueye Studio</span>.
                            </p>
                            <p className="text-gray-100 text-sm">
                                Our team will contact you shortly.
                                Your memories deserve the best ✨
                            </p>
                            <button
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                                onClick={() => setSubmitted(false)}
                            >
                                Back
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input name="name" type="text" placeholder="Your Name" required className="input" />
                                <select name="service" required className="input">
                                    <option value="">Select Service</option>
                                    <option value="wedding">Wedding Photography</option>
                                    <option value="birthday">Birthday Event</option>
                                    <option value="fashion">Fashion Shoot</option>
                                    <option value="portfolio">Portfolio</option>
                                </select>
                                <input name="phone" type="tel" placeholder="Contact Number" required className="input" />
                                <input name="email" type="email" placeholder="Email Address" required className="input" />
                                <input
                                    name="date"
                                    type="date"
                                    className="input focus:bg-white "
                                />
                                <input name="location" type="text" placeholder="Shoot Location" required className="input" />
                                <input name="budget" type="text" placeholder="Budget Range (Optional)" className="input md:col-span-2" />
                            </div>
                            <textarea
                                name="requirements"
                                placeholder="Tell us about your requirement..."
                                rows={4}
                                className="input"
                            ></textarea>

                            <div className="text-center">
                                <p className="text-red-600">{error}</p>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                                >
                                    Submit Booking
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
