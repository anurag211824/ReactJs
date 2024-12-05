import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or need support, feel free to reach out!</p>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
        <label>Message:</label>
        <textarea placeholder="Your message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
