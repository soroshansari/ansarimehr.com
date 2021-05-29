import React, { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type FooterProps = {
  data: {
    name: string;
    social: {
      name: string;
      url: string;
      className: string;
    }[];
  };
};
export const Footer: FC<FooterProps> = ({ data: { name, social } }) => {
  const networks = social.map(function (network) {
    return (
      <li key={network.name}>
        <a target="_blank" href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              &copy; Copyright {new Date().getFullYear()} {name}
            </li>
          </ul>
        </div>
        <div id="go-top">
          <AnchorLink title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
