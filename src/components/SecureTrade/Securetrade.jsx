import React from "react";
import "./Securetrade.css";

function Securetrade() {
  return (
    <section class="secureTrade">
      <div class="container container-flex">
        <div>
          <div class="title-col">
            <h2 class="darkBlueText title">
              Trade securely and market the high growth cryptocurrencies.
            </h2>
          </div>
          <div class="col">
            <div class="inner-col-1 blueStyle" id="card-one">
              <img src="bitcon.png" loading="lazy" />
              <h2>
                Bitcoin<span class="shorthand">BTC</span>
              </h2>
              <p>
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button class="btn btn-blue">
                Start Mining <span class="btn-arrow">></span>
              </button>
            </div>
            <div class="inner-col-1 whiteStyle" id="card-two">
              <img src="ethereum.png" loading="lazy" />
              <h2>
                Ethereum<span class="shorthand">ETH</span>
              </h2>
              <p>
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              <button class="btn btn-blue">
                Start Mining <span class="btn-arrow">></span>
              </button>
            </div>
            <div class="inner-col-1 whiteStyle" id="card-three">
              <img src="litecoin.png" loading="lazy" />
              <h2>
                Litecoin<span class="shorthand">LTC</span>
              </h2>
              <p>
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              <button class="btn btn-blue">
                Start Mining <span class="btn-arrow">></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Securetrade;
