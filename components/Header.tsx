import React, { FC, useEffect, useState } from "react";
import ReactFitText from "react-fittext";
import AnchorLink from "react-anchor-link-smooth-scroll";

type HeaderProps = {
  innerRef?: any;
  current:
    | "home"
    | "about"
    | "resume"
    | "portfolio"
    | "testimonials"
    | "contact";
  data: {
    name: string;
    occupation: string;
    description: string;
    social: {
      name: string;
      url: string;
      className: string;
    }[];
  };
};
export const Header: FC<HeaderProps> = ({
  innerRef,
  current,
  data: { name, social, occupation, description },
}) => {
  const [navClass, setNavClass] = useState("");
  const networks = social.map(function (network) {
    return (
      <li key={network.name}>
        <a target="_blank" href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  const handleScroll = () => {
    const { innerHeight, outerWidth, scrollY } = window;
    if (
      scrollY > innerHeight * 0.2 &&
      scrollY < innerHeight &&
      outerWidth > 768
    ) {
      setNavClass("fade-out");
    } else {
      if (scrollY < innerHeight * 0.2) {
        setNavClass("fade-in");
      } else {
        setNavClass("fade-in opaque");
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header id="home" ref={innerRef}>
      <nav id="nav-wrap" className={navClass}>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className={current === "home" ? "current" : ""}>
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li className={current === "about" ? "current" : ""}>
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li className={current === "resume" ? "current" : ""}>
            <AnchorLink href="#resume">Resume</AnchorLink>
          </li>
          <li className={current === "contact" ? "current" : ""}>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <ReactFitText compressor={1} minFontSize={40} maxFontSize={90}>
            <h1 className="responsive-headline">{name}</h1>
          </ReactFitText>
          <h3>
            <span>{occupation}</span>
          </h3>
          <h3>{description}</h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <AnchorLink href="#about">
          <i className="icon-down-circle"></i>
        </AnchorLink>
      </p>
    </header>
  );
};

const HeaderWithRef = React.forwardRef<unknown, HeaderProps>((props, ref) => {
  return <Header innerRef={ref} {...props} />;
});

export default HeaderWithRef;
