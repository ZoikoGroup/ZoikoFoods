"use client";

import React from "react";

export default function MediaEnquiryForm() {
  return (
    <div className="mx-auto w-full max-w-[784px] bg-white rounded-md shadow-sm p-8 sm:p-10 mb-20">
      <h2 className="text-[24px] font-bold text-black mb-8 leading-tight font-sans">
        Submit a Media Enquiry
      </h2>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Media Outlet / Publication *
          </label>
          <input
            type="text"
            required
            className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Role / Title *
          </label>
          <input
            type="text"
            required
            className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Email Address *
          </label>
          <input
            type="email"
            required
            className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Country / Region *
          </label>
          <select
            required
            defaultValue=""
            className="w-full h-[44px] rounded border border-[#ccc] bg-[#efefef] px-4 py-2 appearance-none focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
              backgroundSize: '16px'
            }}
          >
            <option value="" disabled className="text-[#666]">Select Region</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="eu">Europe</option>
            <option value="asia">Asia</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Inquiry Type *
          </label>
          <select
            required
            defaultValue=""
            className="w-full h-[44px] rounded border border-[#ccc] bg-[#efefef] px-4 py-2 appearance-none focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
              backgroundSize: '16px'
            }}
          >
            <option value="" disabled className="text-[#666]">Select Inquiry Type</option>
            <option value="interview">Interview Request</option>
            <option value="press-release">Press Release Information</option>
            <option value="media-kit">Media Kit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Deadline (If Applicable)
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full h-[44px] rounded border border-[#ccc] px-4 py-2 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow"
            />
          </div>
          <p className="text-[12px] text-[#666] font-sans">
            Please specify if your request is time-sensitive.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-[16px] font-bold text-black font-sans">
            Media Enquiry Details *
          </label>
          <textarea
            required
            rows={4}
            className="w-full rounded border border-[#ccc] px-4 py-3 focus:border-[#C8A35F] focus:outline-none focus:ring-1 focus:ring-[#C8A35F] transition-shadow resize-y"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="confirm"
            required
            className="mt-1 size-4 rounded border-[#767676] cursor-pointer"
          />
          <label htmlFor="confirm" className="text-[16px] text-black font-sans leading-tight">
            I confirm this inquiry is for legitimate media or editorial purposes.
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-[#d4a574] hover:bg-[#c4925e] text-white font-sans text-[15px] px-8 py-3 rounded-[4px] transition-colors"
          >
            Submit Media Enquiry
          </button>
        </div>

        <p className="text-[12px] text-[#666] font-sans leading-relaxed pt-2">
          Your information will be used solely for media and press communications. Zoiko Foods Corp does not share or sell contact details.
        </p>
      </form>
    </div>
  );
}
