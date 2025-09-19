"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto p-6 sm:p-10">
            <div className="w-full rounded-2xl shadow-2xl p-6 sm:p-10  space-y-8 bg-gray-800">
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold  dark:text-white sm:text-4xl">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-sm md:text-lg">
                        We&apos;d love to hear from you!
                    </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                        <Phone className="w-6 h-6 text-blue-500" />
                        <p className="font-medium">+91 7729803266</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Mail className="w-6 h-6 text-blue-500" />
                        <p className=" font-medium">blueyephotostudio@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <MapPin className="w-6 h-6 text-blue-500" />
                        <p className=" font-medium">
                            123 Studio Lane, Hyderabad
                        </p>
                    </div>
                </div>

                {/* Map Section */}
                <div className="overflow-hidden rounded-2xl shadow-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.8848293150299!2d78.36495189701925!3d17.449496760366024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c6b02a3063%3A0x448f8477677aa5a9!2sAnjaiah%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1758045946266!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>

                </div>
            </div>
        </div>
    );
}
