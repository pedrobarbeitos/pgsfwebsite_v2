import React from "react";
import "./ContactCard.scss";
import ContactForm from "../../components/ContactForm/ContactForm";

type Props = {};

function ContactCard({}: Props) {
  return (
    <div className="contactCard">
      <div className="topText">
        <h1>
          <b>contact us</b>
        </h1>
      </div>

      <h2>
        We are an approachable studio and enjoy the opportunity to discuss any
        potential projects and collaborations.
      </h2>
      <br></br>
      <h2>
        If you’d like to discuss how we can work together, please get in touch
        at{" "}
        <b>
          <a href="mailto: info@pgsfarchitects.com">info@pgsfarchitects.com</a>
        </b>
        . You can also leave us a message below.
      </h2>
      <br></br>
      <br></br>
      <br></br>

      <ContactForm />
    </div>
  );
}

export default ContactCard;
