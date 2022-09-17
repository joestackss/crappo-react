import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <header className="header flex flex-center flex-column">
        <header class="header">
          <section class="container container-flex">
            <div class="header-main-col">
              <div class="col-1">
                <div class="discount-col">
                  <p class="discount-code">75% SAVE</p>
                  <p class="discount-code-promo">
                    For the Black Friday weekend
                  </p>
                </div>
                <h1>Fastest and secure platform to invest in crypto</h1>
                <p class="paragraph">
                  Buy and sell cryptocurrencies, trusted by 10M wallets with
                  over $30 billion in transactions.
                </p>
                <button class="btn btn-blue">
                  Try for FREE <span class="btn-arrow">></span>
                </button>
              </div>
              <div class="col-2">
                <img src="hero-img.png" alt="hero-image" loading="lazy" />
              </div>
            </div>
          </section>
        </header>
      </header>
    </div>
  );
};

export default Header;
