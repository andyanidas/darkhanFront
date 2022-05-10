import React from "react";

export function PartThree() {
  const styles = {
    p: {
      color: "aliceblue",
      fontSize: "35px",
    },
    second: {
      color: "rgba(240, 248, 255, 0.821)",
    },
  };
  return (
    <div>
      <p style={styles.p}>
        We are a web & app development company that turns your ideas into a new
        driving force of your business.
      </p>
      <p style={styles.second}>
        We hire brilliant web and mobile app developers to deliver projects on
        time and maintain the top-notch code standards.
      </p>
    </div>
  );
}
