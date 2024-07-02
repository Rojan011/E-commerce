import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to Artistree, where style meets creativity. Discover our
          curated collection of contemporary fashion that celebrates artistry in
          every stitch. From casual elegance to statement pieces, our clothing
          embodies quality craftsmanship and unique design.
        </p>
        <p>
          Whether you're seeking laid-back essentials or standout ensembles,
          Artistree offers a diverse range of apparel that reflects your
          individuality. Explore our latest collections and redefine your
          wardrobe with pieces that inspire and elevate your personal style.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
