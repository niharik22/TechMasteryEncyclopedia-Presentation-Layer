import React from 'react';
import { BookOpen, Database, Laptop, CodeXmlIcon } from 'lucide-react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import './home.css';

const AnimatedIcon = ({ Icon, label, delay }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <div 
      className="animated-icon-container" 
      style={{ 
        animationDelay: `${delay}s`,
        '--icon-color': colors.greenAccent[500],
        '--bg-color': colors.primary[400]
      }}
    >
      <div className="icon-wrapper">
        <Icon className="icon" />
      </div>
      <span className="icon-label" style={{ color: colors.grey[100] }}>{label}</span>
    </div>
  );
};

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="home-container" style={{ backgroundColor: colors.primary[400] }}>
      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="hero-title" style={{ color: colors.grey[100] }}>
        Master the skills & Shape your future
        </h1>
        <p className="hero-subtitle" style={{ color: colors.grey[200] }}>
        Stay ready for the future. Discover the skills that matter most and gain 
        the insights to grow and seize new opportunities with confidence.
        </p>
      </div>

      {/* Icons Section */}
      <div className="icons-container">
        <AnimatedIcon Icon={CodeXmlIcon} label="Programming Languages" delay={0} />
        <AnimatedIcon Icon={Database} label="Tools" delay={0.5} />
        <AnimatedIcon Icon={Laptop} label="Libraries" delay={1} />
        <AnimatedIcon Icon={BookOpen} label="Skills" delay={1.5} />
      </div>

      {/* Background Effects */}
      <div className="background-effects">
        <div 
          className="gradient-orb orb-1"
          style={{ 
            backgroundColor: `${colors.greenAccent[500]}20`,
            filter: `blur(${theme.palette.mode === 'dark' ? '120px' : '80px'})`
          }}
        />
        <div 
          className="gradient-orb orb-2"
          style={{ 
            backgroundColor: `${colors.greenAccent[500]}20`,
            filter: `blur(${theme.palette.mode === 'dark' ? '120px' : '80px'})`
          }}
        />
      </div>
    </div>
  );
};

export default Home;