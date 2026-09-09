import { useState } from "react";
import { motion } from "framer-motion";

import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type EducationCardProps = {
  item: (typeof EDUCATION)[number];
  index: number;
};

// School Logo with clean fallback SVG
const SchoolLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#ffffff] border border-[#915eff]/40 p-2 shadow-[0_0_15px_rgba(145,94,255,0.25)] flex items-center justify-center flex-shrink-0 ring-1 ring-white/10 group-hover:border-[#00cea8]/60 group-hover:shadow-[0_0_20px_rgba(0,206,168,0.3)] transition-all duration-300">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain rounded-xl"
        />
      ) : (
        <svg
          className="w-8 h-8 text-[#00cea8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
          />
        </svg>
      )}
    </div>
  );
};

// Education Card
const EducationCard = ({ item, index }: EducationCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full bg-[#1d1836]/85 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#915eff]/35 shadow-[0_0_20px_rgba(145,94,255,0.12),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#00cea8]/60 hover:shadow-[0_0_25px_rgba(0,206,168,0.25)] transition-all duration-300 relative overflow-hidden group"
  >
    {/* Subtle Ambient Glow */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00cea8]/10 via-[#915eff]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

    {/* Content: Logo, Degree, Institute & Years Metadata Tag */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4 sm:gap-5">
        <SchoolLogo src={item.logo} alt={item.logoAlt} />

        <div>
          <h3 className="text-white text-[18px] sm:text-[21px] font-bold tracking-wide">
            {item.degree}
          </h3>
          <p className="text-[#00cea8] text-[15px] sm:text-[16px] font-semibold mt-0.5">
            {item.institution}
          </p>
        </div>
      </div>

      <div className="self-start sm:self-center flex-shrink-0">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#dfd9ff] bg-[#151030]/90 border border-[#915eff]/40 shadow-[0_0_12px_rgba(145,94,255,0.25)] group-hover:border-[#00cea8]/50 transition-colors">
          <svg
            className="w-3.5 h-3.5 text-[#915eff] group-hover:text-[#00cea8] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="tracking-wide">{item.date}</span>
        </span>
      </div>
    </div>
  </motion.div>
);

// Education Section
export const Education = () => {
  return (
    <SectionWrapper idName="education">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        {/* Education Cards in Reverse Chronological Order */}
        <div className="mt-10 flex flex-col gap-5 sm:gap-6">
          {EDUCATION.map((item, index) => (
            <EducationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
