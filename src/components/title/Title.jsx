import "./title.scss";
import { useEffect, useState } from "react";
import gsap from "gsap";
const Title = ({ text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth <= 1024;

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".title", {
      x: isMobile ? 0 : (position.x - screenWidth / 2) * 0.02,
      y: isMobile ? 0 : (position.y - window.innerHeight / 2) * 0.02,
    });
  }, [position, isMobile, screenWidth]);

  return <h1 className="title">{text}</h1>;
};

export default Title;
