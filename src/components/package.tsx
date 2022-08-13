import React from "react";
import { Link } from "react-router-dom";
export default function Package({ data }: any) {
  return (
    <div>
      <Link to={`/package?id=${data.package_id}`} >
      <div className="courses-card">
        <div className="images-section">
          <div className="overlay"></div>
        </div>
        <div className="content-section">
          <div>
            <h3 className="title">{data.name}</h3>
            <p>{data.package_description}</p>
          </div>
          <div className="action-section">
            <span className="card-action">
              <img src="assets/icons/next-arrow.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
