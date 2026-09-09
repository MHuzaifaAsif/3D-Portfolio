import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const hasSummary = "summary" in experience && Boolean(experience.summary);
  const hasRoles = "roles" in experience && Boolean(experience.roles);
  const isCustomCard = hasSummary || hasRoles;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "18px",
        border: isCustomCard
          ? "1.5px solid rgba(0, 206, 168, 0.5)"
          : "1px solid rgba(145, 94, 255, 0.25)",
        boxShadow: isCustomCard
          ? "0 0 20px rgba(0, 206, 168, 0.15), 0 10px 30px rgba(0, 0, 0, 0.4)"
          : "0 0 15px rgba(145, 94, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.4)",
      }}
      contentArrowStyle={{
        borderRight: isCustomCard
          ? "7px solid rgba(0, 206, 168, 0.5)"
          : "7px solid #1d1836",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* Title & Company */}
      <div>
        {hasRoles ? (
          <div>
            <h3 className="text-white text-[24px] font-black tracking-wide">
              {experience.company_name}
            </h3>
            <p className="text-secondary text-[14px] font-medium tracking-wide">
              Experience
            </p>
          </div>
        ) : hasSummary ? (
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-white text-[24px] font-bold tracking-wide">
              {experience.company_name}
            </h3>
            <span className="px-3 py-1 rounded-full text-[13px] font-semibold bg-[#00cea8]/15 text-[#00cea8] border border-[#00cea8]/40">
              {experience.title}
            </span>
          </div>
        ) : (
          <>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </>
        )}
      </div>

      {/* Nested Roles Timeline (for FAST NUCES) */}
      {hasRoles && "roles" in experience && experience.roles && (
        <div className="mt-5 space-y-6">
          {experience.roles.map((item, idx) => {
            const isLast = idx === experience.roles.length - 1;

            return (
              <div key={`role-${idx}`} className="relative flex items-start gap-3.5">
                {/* Vertical line and dot indicator */}
                <div className="flex flex-col items-center flex-shrink-0 self-stretch">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00cea8] mt-1.5 ring-4 ring-[#1d1836] shadow-[0_0_8px_rgba(0,206,168,0.5)]" />
                  {!isLast && (
                    <div className="w-[1.5px] bg-[#00cea8]/30 flex-grow my-1" />
                  )}
                </div>

                {/* Role Content */}
                <div className="flex-1 pb-1">
                  <h4 className="text-[#00cea8] font-bold text-[17px] tracking-wide">
                    {item.role}
                  </h4>
                  {"subtitle" in item && item.subtitle && (
                    <p className="text-secondary text-[13px] font-normal mt-0.5">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Bullet Points */}
                  <ul className="mt-2 space-y-2 list-none">
                    {item.points.map((point, pIdx) => (
                      <li
                        key={`sub-point-${pIdx}`}
                        className="text-white-100 text-[14px] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#00cea8] text-[16px] leading-tight select-none flex-shrink-0">
                          •
                        </span>
                        <span className="text-white-100/90">{point}</span>
                      </li>
                    ))}

                    {/* Published Paper Button */}
                    {"paperLink" in item && item.paperLink && (
                      <li className="pt-2 pl-3.5">
                        <a
                          href={item.paperLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-white bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#9333ea] hover:from-[#0369a1] hover:to-[#7e22ce] shadow-md hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 group cursor-pointer"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-white/90 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                          </svg>
                          <span>{item.paperLink.text}</span>
                          <span className="text-[13px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                            ↗
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>

                  {/* Skills Badge */}
                  {"skills" in item && item.skills && (
                    <div className="mt-3 flex items-center gap-2 text-[13.5px] font-medium text-white/90">
                      <span className="text-[14px]">💎</span>
                      <span>{item.skills.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Summary Section if present (for single-role cards) */}
      {!hasRoles && hasSummary && "summary" in experience && (
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider italic">
            SUMMARY
          </p>
          <p className="text-white-100 text-[14px] mt-1 leading-relaxed">
            {experience.summary}
          </p>
        </div>
      )}

      {/* Achievements Section Header if summary exists */}
      {!hasRoles && hasSummary && (
        <div className="mt-4">
          <p className="text-secondary text-[12px] font-semibold uppercase tracking-wider italic">
            ACHIEVEMENTS
          </p>
        </div>
      )}

      {/* Experience Points (for single-role cards) */}
      {!hasRoles && (
        <ul className={cn("mt-3 space-y-2.5 list-none", !hasSummary && "mt-5")}>
          {experience.points.map((point, i) => {
            const colonMatch = point.match(/^([A-Z\s&/\\-]+:)\s*(.*)$/);

            return (
              <li
                key={`experience-point-${i}`}
                className="text-white-100 text-[14px] leading-relaxed flex items-start gap-2.5"
              >
                <span className="text-[#00cea8] text-[18px] leading-tight select-none flex-shrink-0">
                  •
                </span>
                <div className="flex-1">
                  {colonMatch ? (
                    <span>
                      <strong className="text-[#00cea8] font-bold tracking-wide">
                        {colonMatch[1]}{" "}
                      </strong>
                      <span className="text-white-100">{colonMatch[2]}</span>
                    </span>
                  ) : (
                    <span>{point}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="experience">
      <>
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
