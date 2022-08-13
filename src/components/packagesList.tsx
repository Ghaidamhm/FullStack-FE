import React from "react";

import Package from "./package";


function PackageList({ packages }: { packages: any[] }) {
  return (
    <div>
      <div className="courses-section">
        {packages.length > 0 ? (
          packages.map((item) => <Package key={item._id} data={item} />)
        ) : (
          <div className="alert alert-dismissible fade show">
            <h4 className="alert-heading text-center text-theme-primary">
              <i className="bi-exclamation-octagon-fill"></i> Oops! Packages Not
              Found.
            </h4>
            <p className="text-center">
              Please Select a valid value in all the Filters before proceeding.
            </p>
            <img  height={500} width={500}  src="/assets/Search-rafiki.png"></img>

          </div>
        )}
      </div>
      <div className="d-flex justify-content-end mt-3">
        <nav aria-label="Page navigation example"></nav>
      </div>
    </div>
  );
}

export default PackageList;
