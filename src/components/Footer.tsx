import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Social:</p>
      <ul className="social">
        <li>
          <img src="facebook_icon.png" alt="" />
        </li>
        <li>
          <img src="instagram_icon.png" alt="" />
        </li>
        <li>
          <img src="email_icon.png" alt="" />

          <a href="mailto:darkhandeed@gmail.com">darkhandeed@gmail.com</a>
        </li>
        <li>
          <img src="phone_icon.png" alt="" />
          <a href="tel:+97670375652">+976 70375652</a>
        </li>
      </ul>
      <p>Холбоо барих: +976-70375652</p>
      <p> ©"ДАРХАН ДЭЭД СУРГУУЛЬ МТБ-4 (COPY RIGHT© 2018)</p>
    </div>
  );
}
