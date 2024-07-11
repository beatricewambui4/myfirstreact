import React from 'react';
import "../style/Styles.css"
const Contact = () => {
  return (
    <div>
      <ol type="a">
        <li>phone_number</li>
        <ul>
          <li>+254757150040</li>
        </ul>
        <li>email_address</li>
        <ul>
          <li>wakonyobeatrice01@gmail.com</li>
        </ul>
      </ol>
      <hr />
      <form action="mailto:info@wakonyobeatrice01@gmail.com" method="post" enctype="text/plain">
        <label htmlFor="yourname">Name:</label>
        <input type="text" id="yourname" name="yourname" value="" /><br /><br />
        <label htmlFor="youremail">Email:</label>
        <input type="email" id="youremail" name="youremail" value="" /><br /><br />
        <label htmlFor="yourpassword">Password:</label>
        <input type="password" id="yourpassword" name="yourpassword" /><br /><br />
        <label htmlFor="yourmessage">Your Message:</label>
        <textarea id="yourmessage" name="yourmessage" rows="10" cols="30" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;