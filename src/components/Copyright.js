import React from "react";
import revolut from "../images/revolut-logo.svg";

const Copyright = () => {
  return (
    <div className="footer-copyright">
      <img src={revolut} alt="" />

      <p>
        Copyright © 2022 Revolut Limited. View our <span>privacy policy</span>{" "}
      </p>
    </div>
  );
};

export default Copyright;
