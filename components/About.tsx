import React, { FC } from "react";

type AboutProps = {
  innerRef?: any;
  data: {
    name: string;
    image: string;
    bio: string;
    phone: string;
    email: string;
    address: {
      city: string;
      state: string;
    };
  };
};
export const About: FC<AboutProps> = ({
  innerRef,
  data: {
    name,
    image,
    bio,
    phone,
    email,
    address: { city, state },
  },
}) => {
  return (
    <section id="about" ref={innerRef}>
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={image}
            alt={`${name} Profile Pic`}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            {/* <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutWithRef = React.forwardRef<unknown, AboutProps>((props, ref) => {
  return <About innerRef={ref} {...props} />;
});

export default AboutWithRef;
