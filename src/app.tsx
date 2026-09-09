import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  BackgroundVideo,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />

      {/* Global Fixed Background Video playing on the entire page */}
      <BackgroundVideo />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar hide={hide} />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />

        {/* Contact */}
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
