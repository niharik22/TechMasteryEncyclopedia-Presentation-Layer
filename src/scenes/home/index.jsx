import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  // Animation for the main container (fading in)
  const containerAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Animation for the heading (scaling and fading in)
  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 15 },
    delay: 300, // Delay to make the heading appear after the container
  });

  // Animation for the paragraph (sliding up and fading in)
  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
    delay: 600, // Delay to make the paragraph appear after the heading
  });

  // Animation for the button (popping up and fading in)
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 500 },
    delay: 900, // Delay to make the button appear last
  });

  useEffect(() => {
    console.log("Home component loaded or reloaded");
  }, []);

  return (
    <animated.div style={{ ...containerAnimation, textAlign: "center", marginTop: "20px" }}>
      <animated.h1 style={{ ...headingAnimation, fontSize: "2.5rem", color: "#4CAF50" }}>
        Welcome to the Tech Mastery Encyclopedia
      </animated.h1>
      <animated.p style={{ ...paragraphAnimation, fontSize: "1.2rem", color: "#B0BEC5", margin: "10px 0" }}>
        Explore the latest tech trends, work modes, and job insights.
      </animated.p>
      <animated.button
        style={{
          ...buttonAnimation,
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#4CAF50",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Learn More
      </animated.button>
    </animated.div>
  );
};

export default Home;
