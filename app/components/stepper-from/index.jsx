"use client";

import { useState, useMemo } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const parseNum = (v) => (v === "" || v == null ? 0 : Math.max(0, parseFloat(String(v).replace(/,/g, "")) || 0));

function calculateROI(formData) {
  const initialCost = parseNum(formData.initialCost);
  const monthlyMaintenance = parseNum(formData.monthlyMaintenance);
  const mau = parseNum(formData.monthlyActiveUsers) || 1000;
  const arpu = parseNum(formData.arpu) || 1;
  const growthRate = parseNum(formData.userGrowthRate) / 100 || 0;
  const marketingBudget = parseNum(formData.marketingBudget);
  const retentionRate = Math.min(99, parseNum(formData.retentionRate)) / 100 || 0.5;

  const monthsPerYear = 12;
  const years = 3;
  let totalRevenue = 0;
  let totalCosts = initialCost;
  const yearData = [];
  let users = mau;

  for (let y = 1; y <= years; y++) {
    const annualRevenue = users * arpu * monthsPerYear;
    const annualMaintenance = monthlyMaintenance * monthsPerYear;
    const annualMarketing = marketingBudget * monthsPerYear;
    const annualCosts = annualMaintenance + annualMarketing;
    const netProfit = annualRevenue - annualCosts;

    totalRevenue += annualRevenue;
    totalCosts += annualCosts;

    yearData.push({
      year: y,
      activeUsers: Math.round(users),
      monthlyRevenue: users * arpu,
      annualRevenue,
      annualCosts,
      netProfit,
    });

    users = users * (1 + growthRate);
  }

  const totalProfit = totalRevenue - totalCosts;
  const roi = totalCosts > 0 ? (totalProfit / totalCosts) * 100 : 0;

  const monthlyRevenueYear1 = yearData[0]?.monthlyRevenue || 0;
  const monthlyCosts = monthlyMaintenance + marketingBudget;
  const monthlyProfit = monthlyRevenueYear1 - monthlyCosts;
  let breakEvenMonths = 36;
  if (monthlyProfit > 0 && totalCosts > 0) {
    breakEvenMonths = Math.ceil(totalCosts / monthlyProfit);
  }
  breakEvenMonths = Math.max(1, Math.min(36, breakEvenMonths));

  const ltv = retentionRate > 0 ? arpu * (1 / (1 - retentionRate)) * 12 : arpu * 12;

  return {
    totalRevenue,
    totalCosts,
    totalProfit,
    roi,
    breakEvenMonths,
    ltv,
    yearData,
  };
}

const formatCurrency = (n) => {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};

const STEPS = [
  { number: "01", label: "Development" },
  { number: "02", label: "Revenue" },
  { number: "03", label: "Marketing" },
  { number: "04", label: "Contact" },
  { number: "05", label: "Results" },
];

const StepperFrom = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    initialCost: "100.00",
    monthlyMaintenance: "0.00",
    appComplexity: "",
    platform: "",
    // Step 2
    monetizationStrategy: "",
    monthlyActiveUsers: "",
    arpu: "",
    userGrowthRate: "",
    // Step 3
    marketingBudget: "",
    userAcquisitionCost: "",
    retentionRate: "",
    conversionRate: "",
    // Step 4
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const goBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "20px",
    paddingRight: "40px",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const results = useMemo(() => calculateROI(formData), [formData]);
  const [selectedYear, setSelectedYear] = useState(1);
  const resetStepper = () => {
    setCurrentStep(1);
    setSelectedYear(1);
  };

  return (
    <section className="container relative z-20 py-16 md:py-24">
      <div className="rounded-2xl bg-[#1a1a1a] border border-white/10 p-6 md:p-10 lg:p-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-britanicaBlack text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Calculate the <span className="text-[#F74B1C]">ROI</span> of Your Mobile{" "}
            <span className="text-[#F74B1C]">App Development Project</span>
          </h2>
          <p className="font-britanicaRegular text-white/70 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Every dollar you invest matters. Get a rough estimate of the return on investment for your upcoming app by filling out this form.
          </p>
        </div>

        {/* Stepper navigation */}
        <div className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 p-4 md:p-5 mb-10">
          <div className="flex items-center justify-between gap-2">
            {STEPS.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-britanicaExtraBold text-sm ${
                      currentStep >= index + 1
                        ? "bg-white/20 text-white border-2 border-white"
                        : "bg-transparent text-white/80 border-2 border-white/50"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className="font-britanicaRegular text-white text-xs mt-1 truncate max-w-[70px] md:max-w-none">
                    {step.label}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className="flex-1 h-0 border-t border-dashed border-white/40 mx-1 md:mx-2 min-w-[8px]"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Development Costs */}
        {currentStep === 1 && (
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <h3 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white">
                Development Costs
              </h3>
              <span className="rounded-lg border border-purple-500/60 bg-purple-500/10 px-3 py-1.5 font-britanicaRegular text-white text-sm">
                Step 1 of 5 · Development Costs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Initial Development Cost */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Initial Development Cost ($) <span className="text-[#F74B1C]">(Required)</span>
                </label>
                <input
                  type="text"
                  name="initialCost"
                  value={formData.initialCost}
                  onChange={handleChange}
                  placeholder="$100.00"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="font-britanicaRegular text-white/50 text-xs mt-1.5">
                  One-time cost to build your app
                </p>
              </div>

              {/* Monthly Maintenance Cost */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Monthly Maintenance Cost ($) <span className="text-[#F74B1C]">(Required)</span>
                </label>
                <input
                  type="text"
                  name="monthlyMaintenance"
                  value={formData.monthlyMaintenance}
                  onChange={handleChange}
                  placeholder="$0.00"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="font-britanicaRegular text-white/50 text-xs mt-1.5">
                  Servers, updates, support per month
                </p>
              </div>

              {/* App Complexity */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  App Complexity
                </label>
                <select
                  name="appComplexity"
                  value={formData.appComplexity}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                  style={selectStyle}
                >
                  <option value="">Select App Complexity</option>
                  <option value="simple">Simple</option>
                  <option value="moderate">Moderate</option>
                  <option value="complex">Complex</option>
                </select>
                <p className="font-britanicaRegular text-white/50 text-xs mt-1.5">
                  Scope & features level
                </p>
              </div>

              {/* Platform */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Platform
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                  style={selectStyle}
                >
                  <option value="">Select Platform</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                  <option value="both">Both (iOS & Android)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 transition-all"
              >
                Next Step
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Revenue Model */}
        {currentStep === 2 && (
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <h3 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white">
                Revenue Model
              </h3>
              <span className="rounded-lg border border-[#F74B1C]/60 bg-[#F74B1C]/10 px-3 py-1.5 font-britanicaRegular text-white text-sm">
                Step 2 of 5 · Revenue Model
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Monetization Strategy */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Monetization Strategy
                </label>
                <select
                  name="monetizationStrategy"
                  value={formData.monetizationStrategy}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent appearance-none cursor-pointer"
                  style={selectStyle}
                >
                  <option value="">Select Monetization Strategy</option>
                  <option value="freemium">Freemium</option>
                  <option value="subscription">Subscription</option>
                  <option value="ads">Advertising</option>
                  <option value="one-time">One-time purchase</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Expected Monthly Active Users (Year 1) */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Expected Monthly Active Users (Year 1)
                </label>
                <input
                  type="text"
                  name="monthlyActiveUsers"
                  value={formData.monthlyActiveUsers}
                  onChange={handleChange}
                  placeholder="e.g. 5000"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* Average Revenue Per User (ARPU) */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Average Revenue Per User (ARPU) - $/month
                </label>
                <input
                  type="text"
                  name="arpu"
                  value={formData.arpu}
                  onChange={handleChange}
                  placeholder="e.g. 4.99"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* User Growth Rate */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  User Growth Rate (% per year)
                </label>
                <input
                  type="text"
                  name="userGrowthRate"
                  value={formData.userGrowthRate}
                  onChange={handleChange}
                  placeholder="e.g. 50"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg bg-[#2E2E2E] border border-white/20 text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 hover:bg-[#3a3a3a] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="rounded-lg bg-[#F74B1C] hover:bg-[#e64418] text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 transition-all"
              >
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Marketing & Operations */}
        {currentStep === 3 && (
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <h3 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white">
                Marketing & Operations
              </h3>
              <span className="rounded-lg border border-[#F74B1C]/60 bg-[#F74B1C]/10 px-3 py-1.5 font-britanicaRegular text-white text-sm">
                Step 3 of 5 · Marketing & Operations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Monthly Marketing Budget */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Monthly Marketing Budget ($)
                </label>
                <input
                  type="text"
                  name="marketingBudget"
                  value={formData.marketingBudget}
                  onChange={handleChange}
                  placeholder="e.g. 3000"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
                <p className="font-britanicaRegular text-white/50 text-xs mt-1.5">
                  Ads, ASO, content etc.
                </p>
              </div>

              {/* User Acquisition Cost (CAC) */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  User Acquisition Cost (CAC) – $/user
                </label>
                <input
                  type="text"
                  name="userAcquisitionCost"
                  value={formData.userAcquisitionCost}
                  onChange={handleChange}
                  placeholder="e.g. 2.50"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* User Retention Rate */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  User Retention Rate (%)
                </label>
                <input
                  type="text"
                  name="retentionRate"
                  value={formData.retentionRate}
                  onChange={handleChange}
                  placeholder="e.g. 40"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* Conversion Rate */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Conversion Rate (%)
                </label>
                <input
                  type="text"
                  name="conversionRate"
                  value={formData.conversionRate}
                  onChange={handleChange}
                  placeholder="e.g. 3"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>
            </div>

            <p className="font-britanicaRegular text-white/50 text-sm mt-6">
              Note: ROI core formulas based on dev cost, maintenance, marketing, users, ARPU & growth.
            </p>

            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg bg-[#2E2E2E] border border-white/20 text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 hover:bg-[#3a3a3a] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="rounded-lg bg-[#F74B1C] hover:bg-[#e64418] text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 transition-all"
              >
                Calculate ROI
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Your Contact Details */}
        {currentStep === 4 && (
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h3 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white">
                  Your Contact Details
                </h3>
                <p className="font-britanicaRegular text-white/60 text-sm mt-2">
                  We&apos;ll send you a copy of this 3-year ROI summary.
                </p>
              </div>
              <span className="rounded-lg border border-[#F74B1C]/60 bg-[#F74B1C]/10 px-3 py-1.5 font-britanicaRegular text-white text-sm shrink-0">
                Step 4 of 5 · Your Contact Details
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Your Name */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-lg bg-[#2E2E2E] border border-white/20 text-white text-base px-4 py-3 font-britanicaRegular focus:outline-none focus:ring-2 focus:ring-[#F74B1C] focus:border-transparent placeholder-white/40"
                />
              </div>

              {/* Phone - full width */}
              <div className="md:col-span-2">
                <label className="block font-britanicaRegular text-white text-base mb-2">
                  Phone
                </label>
                <div className="phone-wrapper rounded-lg bg-[#2E2E2E] border border-white/20 px-4 py-3 focus-within:ring-2 focus-within:ring-[#F74B1C] focus-within:border-transparent">
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.contactPhone}
                    onChange={(value) => setFormData((prev) => ({ ...prev, contactPhone: value ?? "" }))}
                    placeholder="Phone number"
                    className="w-full text-white text-base font-britanicaRegular bg-transparent border-none focus:outline-none [&_input]:bg-transparent [&_input]:text-white [&_input]:text-base [&_input]:focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg bg-[#2E2E2E] border border-white/20 text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 hover:bg-[#3a3a3a] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(5)}
                className="rounded-lg bg-[#F74B1C] hover:bg-[#e64418] text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 transition-all"
              >
                View Results
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Results */}
        {currentStep === 5 && (
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <h3 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white">
                3-Year ROI Results
              </h3>
              <span className="rounded-lg border border-[#F74B1C]/60 bg-[#F74B1C]/10 px-3 py-1.5 font-britanicaRegular text-white text-sm shrink-0">
                Step 5 of 5 · Results
              </span>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 p-5">
                <p className="font-britanicaRegular text-white/90 text-sm">Total 3-Year ROI</p>
                <p className="font-britanicaBlack text-xl md:text-2xl font-black text-white mt-1">
                  {results.roi.toLocaleString("en-US", { maximumFractionDigits: 1 })}%
                </p>
                <p className="font-britanicaRegular text-white/70 text-xs mt-0.5">Return on Investment</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-5">
                <p className="font-britanicaRegular text-white/90 text-sm">Break-Even Point</p>
                <p className="font-britanicaBlack text-xl md:text-2xl font-black text-white mt-1">
                  {results.breakEvenMonths} mo
                </p>
                <p className="font-britanicaRegular text-white/70 text-xs mt-0.5">Time to profitability</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-5">
                <p className="font-britanicaRegular text-white/90 text-sm">Total Profit</p>
                <p className="font-britanicaBlack text-lg md:text-xl font-black text-white mt-1 truncate" title={results.totalProfit.toLocaleString()}>
                  {formatCurrency(results.totalProfit)}
                </p>
                <p className="font-britanicaRegular text-white/70 text-xs mt-0.5">3-year net profit</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-[#F74B1C] to-orange-700 p-5">
                <p className="font-britanicaRegular text-white/90 text-sm">Lifetime Value</p>
                <p className="font-britanicaBlack text-lg md:text-xl font-black text-white mt-1">
                  {formatCurrency(results.ltv)}
                </p>
                <p className="font-britanicaRegular text-white/70 text-xs mt-0.5">LTV per user (est.)</p>
              </div>
            </div>

            {/* 3-Year Totals */}
            <div className="rounded-xl bg-[#2E2E2E] border border-white/10 p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h4 className="font-britanicaBlack text-lg font-black text-white">3-Year Totals</h4>
                <span className="font-britanicaRegular text-purple-400 text-sm">
                  Total ROI: {results.roi.toLocaleString("en-US", { maximumFractionDigits: 1 })}%
                </span>
              </div>
              <ul className="space-y-2 font-britanicaRegular text-sm">
                <li className="flex justify-between">
                  <span className="text-white/80">Revenue</span>
                  <span className="text-emerald-400">{formatCurrency(results.totalRevenue)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/80">Costs</span>
                  <span className="text-red-400">{formatCurrency(results.totalCosts)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/80">Net Profit</span>
                  <span className="text-blue-400">{formatCurrency(results.totalProfit)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/80">ROI</span>
                  <span className="text-purple-400">{results.roi.toLocaleString("en-US", { maximumFractionDigits: 1 })}%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/80">Break-Even</span>
                  <span className="text-white/90">{results.breakEvenMonths} months</span>
                </li>
              </ul>
            </div>

            {/* Year-by-Year toggle */}
            <div className="rounded-xl bg-[#2E2E2E] border border-white/10 p-6 mb-6">
              <h4 className="font-britanicaBlack text-lg font-black text-white mb-4">Year-by-Year Breakdown</h4>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setSelectedYear(y)}
                    className={`rounded-lg px-4 py-2 font-britanicaExtraBold text-sm transition-all ${
                      selectedYear === y
                        ? "bg-[#F74B1C] text-white"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    Year {y}
                  </button>
                ))}
              </div>
              {results.yearData[selectedYear - 1] && (
                <ul className="space-y-2 font-britanicaRegular text-sm">
                  <li className="flex justify-between">
                    <span className="text-white/80">Active Users</span>
                    <span className="text-white">{results.yearData[selectedYear - 1].activeUsers.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Monthly Revenue</span>
                    <span className="text-emerald-400">{formatCurrency(results.yearData[selectedYear - 1].monthlyRevenue)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Annual Revenue</span>
                    <span className="text-emerald-400">{formatCurrency(results.yearData[selectedYear - 1].annualRevenue)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Annual Costs</span>
                    <span className="text-red-400">{formatCurrency(results.yearData[selectedYear - 1].annualCosts)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-white/80">Net Profit (Year {selectedYear})</span>
                    <span className="text-blue-400">{formatCurrency(results.yearData[selectedYear - 1].netProfit)}</span>
                  </li>
                </ul>
              )}
            </div>

            {/* Summary preview */}
            <div className="rounded-xl bg-[#2E2E2E] border border-white/10 p-4 mb-8">
              <h4 className="font-britanicaBlack text-base font-black text-white mb-2">Summary preview</h4>
              <p className="font-britanicaRegular text-white/80 text-sm">
                Total Profit: {formatCurrency(results.totalProfit)} — Total ROI: {results.roi.toLocaleString("en-US", { maximumFractionDigits: 1 })}%
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 p-6 md:p-8 mb-8">
              <h4 className="font-britanicaBlack text-2xl md:text-3xl font-black text-white mb-2">
                Ready to Build Your App?
              </h4>
              <p className="font-britanicaRegular text-white/80 text-sm md:text-base mb-6">
                Our expert team will contact you at {formData.contactPhone || "your provided number"} to discuss your project and provide a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="rounded-lg bg-white text-[#F74B1C] font-britanicaExtraBold px-6 py-3 text-center hover:bg-white/95 transition-all"
                >
                  Schedule Free Consultation
                </a>
                <button
                  type="button"
                  onClick={resetStepper}
                  className="rounded-lg bg-white/20 border border-white/40 text-white font-britanicaExtraBold px-6 py-3 hover:bg-white/30 transition-all"
                >
                  Calculate Another Project
                </button>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg bg-[#2E2E2E] border border-white/20 text-white font-britanicaExtraBold px-6 py-3 flex items-center gap-2 hover:bg-[#3a3a3a] transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StepperFrom;
