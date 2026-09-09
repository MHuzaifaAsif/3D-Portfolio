import { useState } from "react";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = (typeof SERVICES)[number] & {
  index: number;
};

// Service Card with 3D Flip on Hover
const ServiceCard = ({ index, title, icon, skills }: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="xs:w-[310px] w-full [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[24px] shadow-card relative"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full min-h-[390px]"
        >
          {/* Front Face */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="bg-tertiary rounded-[24px] py-8 px-6 min-h-[390px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-28 h-28 object-contain drop-shadow-xl" />
            <h3 className="text-white text-[23px] font-bold text-center tracking-wide">
              {title}
            </h3>
            <span className="text-[12px] text-[#915eff] font-bold tracking-wider uppercase border border-[#915eff]/50 px-4 py-1.5 rounded-full bg-[#915eff]/15 shadow-sm">
              Hover to view skills ↺
            </span>
          </div>

          {/* Back Face (Skillset) */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className="absolute inset-0 bg-[#151030] rounded-[24px] p-6 flex flex-col justify-between border border-[#915eff]/30 shadow-card"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3.5">
                <h4 className="text-white text-[20px] font-bold">{title}</h4>
                <span className="text-[12px] text-[#915eff] font-bold px-2.5 py-0.5 rounded-md bg-[#915eff]/15">Skills</span>
              </div>
              <div className="flex flex-col gap-3.5">
                {skills.map((s, idx) => (
                  <div key={idx} className="flex flex-col text-left">
                    <span className="text-[13.5px] font-bold text-[#a78bfa] uppercase tracking-wider mb-1">
                      {s.category}
                    </span>
                    <p className="text-[15px] text-white-100 leading-snug font-medium">
                      {s.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-secondary text-[11.5px] text-center mt-2 opacity-90 font-medium">
              ↺ Flip back
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a Software Engineer and Quality Assurance Engineer with proven
          experience building and testing production-ready web applications
          using React, Node.js, Express, and MongoDB. As a developer, I craft
          responsive user interfaces, secure REST APIs, and real-time features
          with Socket.io. As a QA engineer, I design test plans, execute manual
          and automated testing, and track down bugs before they reach
          production. I love writing clean, maintainable code and testing it
          just as rigorously to deliver seamless, reliable user experiences.
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
