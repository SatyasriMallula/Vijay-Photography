"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl p-10 mx-auto ">
            <div className="w-full  shadow-2xl rounded-2xl p-10   border-1 border-y-amber-400  space-y-8">
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold ">Get in Touch</h1>
                    <p className="">We’d love to hear from you!</p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                        <Phone className="w-6 h-6 text-blue-500" />
                        <p className="font-medium">+91 98765 43210</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Mail className="w-6 h-6 text-blue-500" />
                        <p className=" font-medium">studio@example.com</p>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15267.287798107382!2d81.58737304169868!3d16.93407281947285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37adf9908763b1%3A0xe6d1725afb77ce4!2sTadimalla%2C%20Andhra%20Pradesh%20534305!5e0!3m2!1sen!2sin!4v1757846359232!5m2!1sen!2sin"
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
