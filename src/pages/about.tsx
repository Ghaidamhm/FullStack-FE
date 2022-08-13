import React from "react";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.css";

export default function About() {
 

  return (
    <div>
      <Header />
      <section className="banner-detail-courses section-spacer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="banner-title ">MiniPack</h2>
            <p>
            MiniPack: <span> An open source 
              project to help JavaScript developers easily share packaged modules of code.</span>
            </p>
            <p></p>


          </div>
         
        </div>
      </div>
    </section>
    </div>
  );
}
