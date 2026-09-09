import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { avatar } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mhuzaifa.asif412@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("03220676858");
    setCopiedPhone(true);
    toast.success("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <SectionWrapper idName="contact">
      <>
        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-12 flex flex-col gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Row 1: Profile & Availability + Email & Phone Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 1: Photo Portion & Availability */}
            <motion.div
              variants={fadeIn("up", "spring", 0.1, 0.75)}
              className="md:col-span-5 bg-[#121528]/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#915eff]/30 shadow-[0_0_20px_rgba(145,94,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.25)] transition-all duration-300 flex flex-col justify-between min-h-[270px] sm:min-h-[285px]"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Avatar with Hover Zoom */}
                <div className="group/avatar relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-white/15 shadow-xl flex-shrink-0 cursor-pointer transition-all duration-500 ease-out hover:scale-115 hover:z-30 hover:border-[#915eff] hover:shadow-[0_0_35px_rgba(145,94,255,0.55)]">
                  <img
                    src={avatar}
                    alt="Muhammad Huzaifa"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 ease-out group-hover/avatar:scale-125 origin-[center_25%]"
                  />
                </div>

                {/* Available Status Pill */}
                <div
                  className="flex items-center justify-center w-13 h-7 rounded-full bg-[#1c261e]/90 border border-[#84cc16]/40 px-1 shadow-inner"
                  title="Available for new opportunities"
                >
                  <span className="w-6 h-3 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] animate-pulse" />
                </div>
              </div>

              {/* Title / Description */}
              <div className="mt-5">
                <h3 className="text-white/95 text-[15.5px] sm:text-[17px] font-semibold leading-snug tracking-tight">
                  Available for Full-time<br />Roles &amp; Collaborations
                </h3>
              </div>
            </motion.div>

            {/* Card 2: Email & Phone with Copy to Clipboard Buttons */}
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="md:col-span-7 bg-[#121528]/85 backdrop-blur-md rounded-3xl p-5 sm:p-7 border border-[#915eff]/30 shadow-[0_0_20px_rgba(145,94,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.25)] transition-all duration-300 flex flex-col justify-center gap-4 sm:gap-5 min-h-[270px] sm:min-h-[285px]"
            >
              {/* Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#191e36]/65 border border-white/5 hover:border-[#915eff]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Email Logo */}
                  <div className="w-10 h-10 rounded-xl bg-[#915eff]/20 border border-[#915eff]/40 flex items-center justify-center flex-shrink-0 text-[#915eff]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-secondary text-[11px] font-semibold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:mhuzaifa.asif412@gmail.com"
                      className="text-white text-[14.5px] sm:text-[16px] lg:text-[17px] font-bold hover:text-[#00cea8] transition-colors truncate block"
                      title="mhuzaifa.asif412@gmail.com"
                    >
                      mhuzaifa.asif412@gmail.com
                    </a>
                  </div>
                </div>

                {/* Copy to Clipboard Button for Email */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-10 h-10 rounded-xl bg-[#1d2238] hover:bg-[#252c48] border border-white/10 hover:border-[#915eff]/60 text-white transition-all flex items-center justify-center flex-shrink-0 shadow-sm group"
                  title="Copy to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <svg
                      className="w-4.5 h-4.5 text-[#00cea8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4.5 h-4.5 text-[#915eff] group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Phone Row (just below email) */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#191e36]/65 border border-white/5 hover:border-[#00cea8]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Phone Logo */}
                  <div className="w-10 h-10 rounded-xl bg-[#00cea8]/20 border border-[#00cea8]/40 flex items-center justify-center flex-shrink-0 text-[#00cea8]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-secondary text-[11px] font-semibold uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:03220676858"
                      className="text-white text-[14.5px] sm:text-[16px] lg:text-[17px] font-bold hover:text-[#00cea8] transition-colors truncate block"
                      title="03220676858"
                    >
                      03220676858
                    </a>
                  </div>
                </div>

                {/* Copy to Clipboard Button for Phone + WhatsApp shortcut */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="w-10 h-10 rounded-xl bg-[#1d2238] hover:bg-[#252c48] border border-white/10 hover:border-[#00cea8]/60 text-white transition-all flex items-center justify-center flex-shrink-0 shadow-sm group"
                    title="Copy to clipboard"
                    aria-label="Copy phone number to clipboard"
                  >
                    {copiedPhone ? (
                      <svg
                        className="w-4.5 h-4.5 text-[#00cea8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4.5 h-4.5 text-[#00cea8] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>

                  {/* 1-click WhatsApp Icon Link */}
                  <a
                    href="https://wa.me/923220676858"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] hover:scale-105 transition-all flex items-center justify-center"
                    title="Chat on WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: LinkedIn, GitHub, Resume Download (Remain the same) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 3: LinkedIn */}
            <motion.a
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              href="https://www.linkedin.com/in/muhammad-huzaifa-asif-120818274"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-[#121528]/85 backdrop-blur-md rounded-3xl p-6 border border-[#915eff]/30 shadow-[0_0_20px_rgba(145,94,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.25)] transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[175px]"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#00cea8] transition-all">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <span className="mt-3 text-white text-[16px] font-medium tracking-wide group-hover:text-[#915eff] transition-colors">
                LinkedIn
              </span>
            </motion.a>

            {/* Card 4: GitHub */}
            <motion.a
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              href="https://github.com/MHuzaifaAsif"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-[#121528]/85 backdrop-blur-md rounded-3xl p-6 border border-[#915eff]/30 shadow-[0_0_20px_rgba(145,94,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.25)] transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[175px]"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#00cea8] transition-all">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <span className="mt-3 text-white text-[16px] font-medium tracking-wide group-hover:text-[#915eff] transition-colors">
                GitHub
              </span>
            </motion.a>

            {/* Card 5: Resume Download */}
            <motion.a
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              href="/resume.pdf"
              download="Muhammad_Huzaifa_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-[#121528]/85 backdrop-blur-md rounded-3xl p-6 border border-[#915eff]/30 shadow-[0_0_20px_rgba(145,94,255,0.1),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.25)] transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[175px]"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-[#00cea8] transition-all">
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="mt-2 text-white text-[15px] font-medium leading-tight group-hover:text-[#915eff] transition-colors">
                Resume<br />Download
              </span>
            </motion.a>
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};
