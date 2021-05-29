import { useFormik } from "formik";
import React, { FC, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import * as qs from "querystring";

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
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string>(null);
  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().max(20, "Subject must be 20 characters or less"),
      message: Yup.string()
        .max(200, "Message must be 200 characters or less")
        .required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await axios.get(`/api/send-mail?${qs.stringify(values)}`);
        setSent(true);
        setSubmitting(false);
        resetForm();
      } catch (err) {
        console.error(err);
        setError("Something went wrong!");
        setSubmitting(false);
      }
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size={35}
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="tooltip">{formik.errors.name}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size={35}
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="tooltip">{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  size={35}
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                />

                {formik.touched.subject && formik.errors.subject ? (
                  <div className="tooltip">{formik.errors.subject}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>

                {formik.touched.message && formik.errors.message ? (
                  <div className="tooltip">{formik.errors.message}</div>
                ) : null}
              </div>

              <div>
                <button
                  className="submit"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Submit
                </button>
                {formik.isSubmitting && (
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                )}
              </div>
            </fieldset>
          </form>
          {error && <div id="message-warning">{error}</div>}
          {sent && (
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          )}
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
        </aside>
      </div>
    </section>
  );
};

const ContactWithRef = React.forwardRef<unknown, ContactProps>((props, ref) => {
  return <Contact innerRef={ref} {...props} />;
});

export default ContactWithRef;
