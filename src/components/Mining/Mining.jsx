import React from "react";
import "./Mining.css";

function Mining() {
  return (
    <section class="mining">
      <div class="container container-flex">
        <div class="main-col">
          <div class="col-1">
            <h3>Start mining now</h3>
            <p>
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div class="col-2">
            <input type="email" placeholder="Enter your email" />
            <div>
              <button class="btn btn-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mining;
