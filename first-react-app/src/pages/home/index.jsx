import React from "react";
import img from "../../assets/images/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
import "./home.scss";
function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home">
          <div className="left">
            <h2>ELECTRICAL SERVICE PROVIDERS</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus debitis, accusantium quibusdam porro perferendis
              impedit?
            </p>
            <button>Contact Us</button>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
