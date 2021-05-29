import React, { FC } from "react";

type ContactProps = {
  innerRef?: any;
  data: {
    name: string;
    contactMessage: string;
    phone: string;
    email: string;
    address: {
      city: string;
      state: string;
      street?: string;
    };
  };
};
export const Contact: FC<ContactProps> = ({
  innerRef,
  data: {
    name,
    contactMessage,
    phone,
    email,
    address: { city, state, street },
  },
}) => {
  const handleChange = (event) => {
    console.log(event);
  };
  return (
    <section id="contact" ref={innerRef}>
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size={35}
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact info</h4>
            <p className="address">
              {name}
              <br />
              {street && (
                <>
                  {street} <br />
                </>
              )}
              {city}, {state}
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>

          {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
        </aside>
      </div>
    </section>
  );
};

const ContactWithRef = React.forwardRef<unknown, ContactProps>((props, ref) => {
  return <Contact innerRef={ref} {...props} />;
});

export default ContactWithRef;
