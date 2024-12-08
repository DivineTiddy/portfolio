import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import arrow from "../assets/icons/arrow.svg";
const Layout = styled.div`
  width: 301px;
  height: 386px;
  .input-conatiner {
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .input-field {
      border: none;
      border-bottom: 2px solid black;
      outline: none;
    }
    .error-message{
      color: red;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      font-family: "Roboto", serif;
    }
    label{
      font-size: 16px;
      font-weight: bold;
      font-family: "League Spartan", sans-serif;

    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 47px;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    button {
      width: 298px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      line-height: 19px;
      font-family: "Roboto", serif;
      background-color: var(--ashe-color);
      border: none;
      cursor: pointer;
      @media (min-width: 768px) {
        width: 240px;
      }
    }
  }
`;

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Send email via EmailJS
      const response = await emailjs.send(
        "service_o66xn0m", // Replace with your EmailJS service ID
        "template_my9mbd8", // Replace with your EmailJS template ID
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "oe2ToF8hCsSfwPEN8" // Replace with your EmailJS public key (user ID)
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="input-conatiner">
              <label htmlFor="name">Name</label>
              <Field
                className="input-field"
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
              />
              <ErrorMessage className="error-message" name="name" component="div" />
            </div>

            <div className="input-conatiner">
              <label htmlFor="email">Email</label>
              <Field
                className="input-field"
                placeholder="email@example.com"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage className="error-message" name="email" component="div" />
            </div>

            <div className="input-conatiner">
              <label htmlFor="message">Message</label>
              <Field
                className="input-field"
                placeholder="Hello, my name is . . . "
                as="textarea"
                id="message"
                name="message"
              />
              <ErrorMessage className="error-message" name="message" component="div" />
            </div>

            <div className="button-container">
              <button type="submit" disabled={isSubmitting}>
                <img src={arrow} />
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default ContactForm;
