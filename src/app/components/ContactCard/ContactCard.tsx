import React from "react";
import "./ContactCard.scss";
import ContactForm from "../../components/ContactForm/ContactForm";

type Props = {};

function ContactCard({}: Props) {
  return (
    <div className="contactCard">
      <div className="topText">
        <h1>
          <b>Contact us</b>
        </h1>
        <h3>Please leave a message and we will get back to you</h3>
      </div>
      <br></br>
      <ContactForm />
    </div>
  );
}

export default ContactCard;
