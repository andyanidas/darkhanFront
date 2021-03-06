import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  const loadingStyle = {
    outer: {
      zIndex: "2",
    },
    spinBody: {
      height: "100vh",
      width: "100vw",
      position: "fixed" as "fixed",
      top: "0",
      right: "0",
      backgroundColor: "black",
      opacity: "0.7",
      fontSize: "100px",
    },
    spinning: {
      marginTop: "50vh",
      opacity: "1",
      color: "white",
    },
    backSide: {
      height: "100vh",
    },
  };
  return (
    <div style={loadingStyle.outer}>
      <div style={loadingStyle.spinBody}>
        <Spinner animation="border" style={loadingStyle.spinning} />
        <p style={{ opacity: "1", color: "white", fontSize: "4rem" }}>
          Та түр хүлээнэ үү!
        </p>
      </div>
    </div>
  );
}
