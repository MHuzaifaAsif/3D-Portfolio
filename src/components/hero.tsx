import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto touch-pan-y overflow-hidden">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-36 sm:top-40 max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-auto md:pointer-events-none",
        )}
      >
        {/* Title Indicator */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div className="pointer-events-auto">
          <h1 className={cn(styles.heroHeadText, "text-white drop-shadow-md")}>
            Hi, I'm <span className="text-[#915eff]">Muhammad Huzaifa</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100 drop-shadow")}>
            I develop full-stack web applications and break them on purpose — <br className="sm:block hidden" />
            Software Engineer by build, QA Engineer by mindset.
          </p>
        </div>
      </div>
    </section>
  );
};
