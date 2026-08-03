"use client";

import React from 'react';

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#234A24] via-[#2D5F2E] to-[#d3a172] pt-24 pb-48 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold font-['Segoe_UI'] mb-4">
            Contact Us
          </h1>
          <p className="text-white/95 text-lg md:text-xl font-normal font-['Segoe_UI']">
            Zoiko Foods is ready to provide the right solution according to your needs
          </p>
        </div>
      </section>

      {/* Main Contact Card */}
      <div className="max-w-6xl mx-auto -mt-32 relative z-20 px-4 md:px-8 mb-20">
        <div className="bg-white rounded-[20px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col md:flex-row">

          {/* Left Column - Contact Info */}
          <div className="w-full md:w-5/12 bg-[#F8F9FA] p-8 md:p-12 flex flex-col gap-10">
            <div>
              <h2 className="text-[#234A24] text-3xl font-bold font-['Segoe_UI'] mb-4">Get in touch</h2>
              <p className="text-[#666666] text-base font-normal font-['Segoe_UI'] leading-6">
                We&apos;re here to help and answer any questions you might have. We look forward to hearing from you
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#234A24] text-lg font-bold font-['Segoe_UI'] mb-1">Head Office</h3>
                  <p className="text-[#666666] text-base font-normal font-['Segoe_UI'] leading-6">
                    1401 21st Street Suite R<br />Sacramento CA 95811.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#234A24] text-lg font-bold font-['Segoe_UI'] mb-1">Email Us</h3>
                  <p className="text-[#666666] text-base font-normal font-['Segoe_UI'] leading-6">
                    support@zoikofoods.com<br />info@zoikofoods.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#234A24] text-lg font-bold font-['Segoe_UI'] mb-1">Call Us</h3>
                  <p className="text-[#666666] text-base font-normal font-['Segoe_UI'] leading-6">
                    Tel: +800-484-5574
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-[#234A24] text-lg font-bold font-['Segoe_UI'] mb-4">Follow our social media</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white hover:bg-[#234A24] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white hover:bg-[#234A24] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white hover:bg-[#234A24] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 bg-[#2D5F2E] rounded-full flex items-center justify-center text-white hover:bg-[#234A24] transition-colors">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM10.02 15.02L15.485 12 10.02 8.98v6.04z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <h2 className="text-[#234A24] text-3xl font-bold font-['Segoe_UI'] mb-8">Send us a message</h2>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Name</label>
                  <input type="text" id="name" className="h-12 px-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Company</label>
                  <input type="text" id="company" className="h-12 px-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Phone</label>
                  <input type="tel" id="phone" className="h-12 px-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Email</label>
                  <input type="email" id="email" className="h-12 px-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Subject</label>
                <input type="text" id="subject" className="h-12 px-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#333333] text-base font-semibold font-['Segoe_UI']">Message</label>
                <textarea id="message" className="h-28 p-4 bg-white rounded-lg border border-[#DDDDDD] outline-none focus:border-[#2D5F2E] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full mt-4 h-14 bg-[#234A24] hover:bg-[#2D5F2E] transition-colors rounded-[30px] flex items-center justify-center text-white text-lg font-bold font-['Arial']">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="w-full bg-[#F8F9FA] py-8 md:py-20 flex justify-center px-2 md:px-8">
        <div className="max-w-[1282px] w-full mx-auto flex justify-center md:block">
          <div className="w-[374px] md:w-full h-[450px] bg-white rounded-[20px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] overflow-hidden relative flex-shrink-0">
            <img
              src="/images/contact-map.png"
              alt="Zoiko Foods Routing Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
