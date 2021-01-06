import React from "react";
//import MainTemplate from "../templates/MainTemplate";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import styled from "styled-components";

const Contact = () => {
  return (
    // <form name="contact" method="post">
    //   <input type="hidden" name="form-name" value="contact" />
    //   <p>
    //     <label>
    //       Your Name: <input type="text" name="name" />
    //     </label>
    //   </p>
    //   <p>
    //     <label>
    //       Your Email: <input type="email" name="email" />
    //     </label>
    //   </p>
    //   <p>
    //     <label>
    //       Message: <textarea name="message"></textarea>
    //     </label>
    //   </p>
    //   <p>
    //     <button type="submit">Send</button>
    //   </p>
    // </form>
    <form name="contact" method="post" autocomplet="on">
      <fieldset>
        <legend>Personalia:</legend>
        <input type="hidden" name="form-name" value="contact" required />

        <label for="name">
          Twoje imię:{" "}
          <input type="text" name="name" id="name" maxlength="20" required />
        </label>

        <p>
          <label for="email">
            Your Email:{" "}
            <input
              type="email"
              name="email"
              id="email"
              maxlength="20"
              required
            />
          </label>
        </p>
        <p>
          <label for="message">
            Message:
            <textarea
              name="message"
              id="message"
              rows="10"
              cols="30"
              required
            ></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </fieldset>
    </form>
  );
};

export default Contact;
