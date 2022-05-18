import React from "react";
// import "../style/footer.css";

export default function Footer() {
  const footerStyle = {
    outer: {
      background:
        "linear-gradient(90deg,rgba(65, 61, 113, 1) 0%,rgba(174, 174, 230, 1) 55%,rgba(60, 201, 219, 1) 100%)",
      width: "100vw",
      height: "80px",
      color: "white",
      display: "flex",
      flexDirection: "row-reverse" as "row-reverse",
      alignItems: "center",
      marginTop: "auto",
    },
  };
  return (
    <div style={footerStyle.outer}>
      {/* <p>Social:</p>
      <ul>
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
      </ul> */}

      <p style={{ marginRight: "3rem" }}>
        ©"ДАРХАН ДЭЭД СУРГУУЛЬ МТБ-4 (COPY RIGHT© 2018)
      </p>
    </div>
  );
}
