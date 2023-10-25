import React, { useEffect, useState } from "react";

const WelcomePage = () => {
  const [loaded, setLoaded] = useState(false);

  // This useEffect will trigger the animation when the component is mounted.
  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    opacity: 0,
    transition: "all 1s ease",
    transform: loaded ? "scale(1.1)" : "scale(1)",
    opacity: loaded ? 1 : 0,
  };

  const headingStyle = {
    fontSize: "44px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Student Management System</h1>
    </div>
  );
};

export default WelcomePage;
