import React from "react";
import "./Statistics.css";

function Statistics() {
  return (
    <section class="statistics">
      <div class="container container-flex">
        <div class="statistics-main-col">
          <div class="col-2">
            <img src="feature-2-img.png" loading="lazy" />
          </div>
          <div class="col-1">
            <h2>Detailed Statistics</h2>
            <p class="paragraph">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button class="btn btn-blue">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
