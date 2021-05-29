import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";
import { resumeData } from "../constants/resume-data.constant";

export const Home = () => {
  const [current, setCurrent] = useState<
    "home" | "about" | "resume" | "portfolio" | "testimonials" | "contact"
  >("about");
  const handleWaypointEnter = (
    props: any,
    name: "home" | "about" | "resume" | "portfolio" | "testimonials" | "contact"
  ) => {
    console.log("props", props);
    setCurrent(name);
  };
  return (
    <>
      <div className="App">
        <Waypoint
          topOffset="5%"
          bottomOffset="80%"
          onEnter={(props) => handleWaypointEnter(props, "home")}
        >
          <Header data={resumeData.main} current={current} />
        </Waypoint>

        <Waypoint
          topOffset="5%"
          bottomOffset="80%"
          onEnter={(props) => handleWaypointEnter(props, "about")}
        >
          <About data={resumeData.main} />
        </Waypoint>

        <Waypoint
          topOffset="5%"
          bottomOffset="80%"
          onEnter={(props) => handleWaypointEnter(props, "resume")}
        >
          <Resume data={resumeData.resume} />
        </Waypoint>

        <Waypoint
          topOffset="5%"
          bottomOffset="80%"
          onEnter={(props) => handleWaypointEnter(props, "contact")}
        >
          <Contact data={resumeData.main} />
        </Waypoint>

        <Footer data={resumeData.main} />
      </div>
    </>
  );
};

export default Home;
