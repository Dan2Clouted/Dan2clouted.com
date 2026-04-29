import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full text-white transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 shadow-lg`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
