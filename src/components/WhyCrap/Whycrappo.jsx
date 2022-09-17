import React from "react";
import "./Whycrap.css";

function Whycrap() {
  return (
    <section class="whyCrappo">
      <div class="container container-flex">
        <div class="intro-col-1">
          <div class="icon-content-col">
            <div class="icon-img-col">
              <img src="Bar-Chart-1.svg" alt="bar-chart-icon" loading="lazy" />
            </div>
            <div>
              <h2 class="headingTitle">$30B</h2>
              <p class="paragraphtTitle">Digital Currency Exchanged</p>
            </div>
          </div>
          <div class="icon-content-col">
            <div class="icon-img-col">
              <img src="Profile-Icon-1.svg" alt="profile-icon" loading="lazy" />
            </div>
            <div>
              <h2 class="headingTitle">10M+</h2>
              <p class="paragraphtTitle">Trusted Wallets Investor</p>
            </div>
          </div>
          <div class="icon-content-col">
            <div class="icon-img-col">
              <img src="World-Icon-1.svg" alt="world-icon" loading="lazy" />
            </div>
            <div>
              <h2 class="headingTitle">195</h2>
              <p class="paragraphtTitle">Countries Supported</p>
            </div>
          </div>
        </div>

        <div class="features-main-col">
          <div class="col-2">
            <img src="why-img.png" alt="features" loading="lazy" />
          </div>
          <div class="col-1">
            <h2>Why you should choose CRAPPO</h2>
            <p class="paragraph">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button class="btn btn-blue">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whycrap;
