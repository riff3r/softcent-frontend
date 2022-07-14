import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import Pay from "./UI/Pay";

const Payment = () => {
  return (
    <div className="container">
      <div className="payment-details">
        <Link className="left-arrow" to="/">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            width={20}
            color="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>

        <h1>Enter card details</h1>

        <div className="details-header">
          <h3>Pay €10 to Softcent OÜ</h3>
          <span>Logo design</span>
        </div>
      </div>

      <form className="payment-form">
        <div className="card-details">
          <div className="card-details-input flex">
            <svg
              width={25}
              viewBox="0 0 24 24"
              color="grey-80"
              class="icon-base__IconBase-sc-1efctcf-0 bTbWvS"
            >
              <g fill="currentColor">
                <path
                  fill="currentColor"
                  d="M4 5a2 2 0 0 0-2 2v2h20V7a2 2 0 0 0-2-2H4zM22 11H2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7z"
                ></path>
              </g>
            </svg>
            <input type="text" placeholder="Card number" />
          </div>

          <span>MM/YY CVV</span>
        </div>

        <div className="card-details cardholder-name">
          <div className="card-details-input">
            <input type="text" placeholder="Cardholder Name" />
          </div>
        </div>

        <div className="card-details cardholder-name">
          <div className="card-details-input">
            <input type="text" placeholder="Email Address" />
          </div>
        </div>
      </form>

      <Copyright />

      <Pay />
    </div>
  );
};

export default Payment;
