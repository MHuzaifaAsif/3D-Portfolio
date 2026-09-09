import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
  enableTilt: boolean;
};

// Project border theme colors matching each project image's primary accent color
const cardThemes = [
  // 1. SkillSwap (Vibrant Orange)
  "border-[#f97316]/80 shadow-[0_0_25px_rgba(249,115,22,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#f97316] hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]",
  // 2. Mobile Test Automation (Electric Sky Blue)
  "border-[#38bdf8]/80 shadow-[0_0_25px_rgba(56,189,248,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#38bdf8] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]",
  // 3. EduConnect (Purple / Violet)
  "border-[#8b5cf6]/85 shadow-[0_0_25px_rgba(139,92,246,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#8b5cf6] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]",
  // 4. Quran ILM (Emerald Mint Teal)
  "border-[#00cea8]/80 shadow-[0_0_25px_rgba(0,206,168,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#00cea8] hover:shadow-[0_0_35px_rgba(0,206,168,0.5)]",
  // 5. REST API Automation (OpenWeather Orange)
  "border-[#eb6e4b]/80 shadow-[0_0_25px_rgba(235,110,75,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#eb6e4b] hover:shadow-[0_0_35px_rgba(235,110,75,0.5)]",
  // 6. NYC Congestion Audit (Coral Red)
  "border-[#f87171]/80 shadow-[0_0_25px_rgba(248,113,113,0.2),0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#f87171] hover:shadow-[0_0_35px_rgba(248,113,113,0.5)]",
];

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  enableTilt,
}: ProjectCardProps) => {
  const currentCardClassName = cn(
    "bg-tertiary p-5 rounded-2xl sm:w-90 w-full border-2 transition-all duration-300",
    cardThemes[index % cardThemes.length],
  );

  const content = (
    <>
      <div className="relative w-full h-57.5">
        {/* Work image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>

          {/* Github */}
          <div
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
          >
            <img
              src={github}
              alt="Github"
              title="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag, tagIdx) => (
          <span
            key={`Tag-${tagIdx}`}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#cbd5e1] bg-[#1a2138] border border-white/10 hover:border-[#915eff]/50 hover:text-white transition-colors tracking-tight whitespace-nowrap"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {enableTilt ? (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
            gyroscope: false,
          }}
          className={currentCardClassName}
        >
          {content}
        </Tilt>
      ) : (
        <div className={currentCardClassName}>{content}</div>
      )}
    </motion.div>
  );
};

// Works
export const Works = () => {
  const [enableTilt, setEnableTilt] = useState(
    () => window.matchMedia("(min-width: 768px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableTilt(mediaQuery.matches);

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-7.5"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={`project-${i}`}
              index={i}
              enableTilt={enableTilt}
              {...project}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/MHuzaifaAsif"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl border border-[#3b82f6] text-[#3b82f6] font-medium text-[15px] sm:text-[16px] hover:bg-[#3b82f6]/10 hover:border-[#60a5fa] hover:text-[#60a5fa] transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] active:scale-[0.98]"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
              />
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </>
    </SectionWrapper>
  );
};
