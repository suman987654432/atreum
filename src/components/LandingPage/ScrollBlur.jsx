import { useEffect, useState } from "react";

const ScrollBlur = ({ children }) => {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurValue = Math.min(scrollY / 50, 6); // max blur 6px
      setBlur(blurValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ filter: `blur(${blur}px)` }}>
      {children}
    </div>
  );
};

export default ScrollBlur;
