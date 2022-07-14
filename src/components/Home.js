import React from "react";
import { Link } from "react-router-dom";
import google from "../images/google-pay.svg";

import payment from "../images/payment-methods.png";
import Copyright from "./Copyright";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h3>Pay €10</h3>
        <p>To Softcent OÜ</p>
        <span>Logo design</span>
      </header>

      <section className="payment">
        <h4>Choose a payment method</h4>

        <div className="payment-container">
          <div class="payment-card payment-google">
            <h3>Google Pay</h3>
            <button>
              <img src={google} alt="" />
            </button>
          </div>

          <div className="payment-card payment-credit">
            <h3>Credit or debit card</h3>
            <Link className="btn-pay" to="payment">
              Pay with card
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-primary">
          <p>
            +37253633471 · mdmarufhossen0591@gmail.com <br /> Harju maakond,
            Kesklinna linnaosa, Karu tn 17,, 10120, Tallinn, Harju
          </p>

          <img src={payment} alt="" />
        </div>

        <Copyright />
      </footer>
    </div>
  );
};

export default Home;
