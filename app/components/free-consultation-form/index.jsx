"use client";

import React, { useState } from "react";
import CapsuleLabel from "../common/capsule-label";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const INPUT_STYLE =
  "font-gliker text-[14px] bg-[#2E2E2E] text-[#fff] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
const LABEL_STYLE =
  "ml-2 rounded-lg font-gliker text-[#fff] relative z-10 inline-block text-sm font-medium bg-black p-1 px-2";
const ERROR_INPUT = "ring-2 ring-red-500";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");
}

const FreeConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const trimmedName = formData.name?.trim();
    if (!trimmedName) {
      newErrors.name = "Full Name is required";
    }

    const trimmedBusiness = formData.businessName?.trim();
    if (!trimmedBusiness) {
      newErrors.businessName = "Business Name is required";
    }

    const trimmedEmail = formData.email?.trim();
    if (!trimmedEmail) {
      newErrors.email = "Company Email is required";
    } else if (!validateEmail(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    const trimmedPhone = phone?.trim();
    if (!trimmedPhone) {
      newErrors.phone = "Phone is required";
    } else if (!isValidPhoneNumber(trimmedPhone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!validate()) return;

    setIsLoading(true);
    try {
      // Replace with your API endpoint or form service
      // await fetch("/api/consultation", { method: "POST", body: JSON.stringify({ ...formData, phone }) });
      await new Promise((r) => setTimeout(r, 800)); // Simulate submit

      setFormData({ name: "", businessName: "", email: "", message: "" });
      setPhone("");
      setErrors({});
      setSubmitSuccess(true);
    } catch (err) {
      setErrors((prev) => ({ ...prev, submit: "Something went wrong. Please try again." }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-black p-[20px]">
      <form onSubmit={handleSubmit}>
        <div className="pb-[10px] flex items-center justify-center">
          <CapsuleLabel firstWord="Schedule a free consultation" secondWord="" />
        </div>

        <div className="py-2">
          <label htmlFor="name" className={`${LABEL_STYLE} bg-black`}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type here"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className={`-mt-[16px] ${INPUT_STYLE} ${errors.name ? ERROR_INPUT : ""}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
        </div>

        <div className="py-2">
          <label htmlFor="businessName" className={`${LABEL_STYLE} bg-black`}>
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            placeholder="Type here"
            value={formData.businessName}
            onChange={handleChange}
            disabled={isLoading}
            className={`-mt-[16px] ${INPUT_STYLE} ${errors.businessName ? ERROR_INPUT : ""}`}
          />
          {errors.businessName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.businessName}</p>}
        </div>

        <div className="py-2">
          <label htmlFor="email" className={`${LABEL_STYLE} bg-black`}>
            Company Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type here"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className={`-mt-[16px] ${INPUT_STYLE} ${errors.email ? ERROR_INPUT : ""}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
        </div>

        <div className="w-full py-2">
          <label className={`${LABEL_STYLE} bg-black`}>Phone</label>
          <div
            className={`phone-wrapper bg-[#2E2E2E] rounded-xl px-4 py-3 -mt-[8px] transition-all duration-200 ${errors.phone ? "ring-2 ring-red-500 rounded-xl" : ""}`}
          >
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={(v) => {
                setPhone(v ?? "");
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
              }}
              disabled={isLoading}
              className="w-full text-[14px] text-[#fff] font-gliker bg-transparent border-none focus:outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
        </div>

        <div className="py-2">
          <label htmlFor="message" className="ml-2 rounded-lg text-[#fff] relative z-10 inline-block text-sm font-medium bg-black p-1 px-2">
            Description
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Type here"
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            className="-mt-[10px] text-[14px] font-gliker bg-[#2E2E2E] text-[#fff] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        {errors.submit && <p className="text-red-500 text-sm mb-2">{errors.submit}</p>}
        {submitSuccess && (
          <p className="text-green-500 text-sm mb-2">Thank you! We&apos;ll be in touch soon.</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#F74B1C] cursor-pointer font-britanicaExtraBold text-[20px] text-[#fff] px-4 py-3 w-full rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Get Instant Quote"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FreeConsultationForm;
