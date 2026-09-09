import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <footer
      className={cn(
        styles.paddingX,
        "w-full flex items-center justify-center py-8 bg-[#050816]/75 backdrop-blur-md border-t border-t-white/10"
      )}
    >
      <div className="w-full flex justify-center items-center max-w-7xl mx-auto text-center">
        <p className="text-white text-md font-bold">
          &copy; Muhammad Huzaifa {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
