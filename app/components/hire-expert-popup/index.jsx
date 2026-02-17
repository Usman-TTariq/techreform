"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { getImagePath } from "../../utils/imagePath";

const INPUT_CLASS =
    "w-full min-w-0 px-3 sm:px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/15 text-white font-britanicaRegular text-[14px] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F74B1C]/50 focus:border-[#F74B1C] transition-colors box-border";
const LABEL_CLASS = "block text-white/90 font-britanicaRegular text-[13px] mb-1.5";

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");
}

const HireExpertPopup = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name?.trim()) newErrors.name = "Name is required";
        if (!formData.email?.trim()) newErrors.email = "Email is required";
        else if (!validateEmail(formData.email.trim())) newErrors.email = "Enter a valid email";
        if (!formData.phone?.trim()) newErrors.phone = "Phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitSuccess(false);
        if (!validate()) return;
        setIsLoading(true);
        try {
            // await fetch("/api/hire-request", { method: "POST", body: JSON.stringify(formData) });
            await new Promise((r) => setTimeout(r, 600));
            setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            setErrors({});
            setSubmitSuccess(true);
        } catch {
            setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }));
        } finally {
            setIsLoading(false);
        }
    };

    const resetAndClose = () => {
        setSubmitSuccess(false);
        setErrors({});
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto" aria-modal="true" role="dialog">
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={resetAndClose} aria-hidden />
            <div
                className="relative z-10 w-[calc(100vw-24px)] max-w-lg max-h-[90vh] min-w-0 rounded-2xl overflow-hidden bg-[#0e0e0e] border border-white/10 shadow-2xl flex flex-col my-auto box-border"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={resetAndClose}
                    className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#F74B1C] transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Top: phone image (iPhone 13 Pro Double Front) */}
                <div className="flex-shrink-0 h-[120px] sm:h-[160px] bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] flex items-center justify-center py-3 sm:py-4 px-3 sm:px-4 min-w-0 overflow-hidden">
                    <Image
                        src={encodeURI(getImagePath("/images/iPhone 13 Pro - Double Front - Dark.png"))}
                        alt=""
                        width={280}
                        height={160}
                        className="w-auto h-[110px] sm:h-[140px] object-contain drop-shadow-lg"
                        unoptimized
                    />
                </div>

                {/* Scrollable form area */}
                <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                    <div className="p-4 sm:p-6 pt-2 min-w-0">
                        <h3 className="font-britanicaBlack text-white text-[20px] sm:text-[24px] leading-tight font-black mb-1">
                            Hire Expert App Developers
                        </h3>
                        <p className="font-britanicaRegular text-white/70 text-[13px] sm:text-[14px] mb-5">
                            Share your details and we&apos;ll get back with a custom plan.
                        </p>

                        {submitSuccess ? (
                            <div className="py-6 text-center">
                                <p className="text-[#F74B1C] font-britanicaExtraBold text-[18px] mb-2">Thank you!</p>
                                <p className="text-white/80 font-britanicaRegular text-[14px] mb-4">
                                    We&apos;ll reach out shortly to discuss your project.
                                </p>
                                <button
                                    type="button"
                                    onClick={resetAndClose}
                                    className="rounded-full bg-[#F74B1C] text-white font-britanicaExtraBold text-[15px] py-3 px-6 hover:bg-[#e64418] transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="popup-name" className={LABEL_CLASS}>Full Name *</label>
                                    <input
                                        id="popup-name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`${INPUT_CLASS} ${errors.name ? "ring-2 ring-red-500 border-red-500" : ""}`}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="popup-email" className={LABEL_CLASS}>Email *</label>
                                    <input
                                        id="popup-email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className={`${INPUT_CLASS} ${errors.email ? "ring-2 ring-red-500 border-red-500" : ""}`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="popup-phone" className={LABEL_CLASS}>Phone *</label>
                                    <input
                                        id="popup-phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className={`${INPUT_CLASS} ${errors.phone ? "ring-2 ring-red-500 border-red-500" : ""}`}
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="popup-company" className={LABEL_CLASS}>Company / Project Name</label>
                                    <input
                                        id="popup-company"
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company or project"
                                        className={INPUT_CLASS}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="popup-message" className={LABEL_CLASS}>Tell us about your project</label>
                                    <textarea
                                        id="popup-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="App idea, timeline, platform (iOS/Android)..."
                                        className={`${INPUT_CLASS} resize-none`}
                                    />
                                </div>
                                {errors.submit && <p className="text-red-400 text-sm">{errors.submit}</p>}
                                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={resetAndClose}
                                        className="flex-1 py-3.5 px-5 rounded-full border border-white/25 text-white font-britanicaRegular text-[15px] hover:bg-white/10 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 py-3.5 px-5 rounded-full bg-[#F74B1C] text-white font-britanicaExtraBold text-[15px] hover:bg-[#e64418] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? "Sending..." : "Submit & Get a Callback"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireExpertPopup;
