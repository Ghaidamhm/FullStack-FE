import React from "react";
import Advertisment from "./advertisment";

function AdvertismentList({ advertisment }:any) {
  return (
    <div className="parent-adv">
      {" "}
      <div className="advertisment-section">
        {advertisment.map((item:any, i:number) => (
          <Advertisment key={i} data={item} imgFile={item.img} />
        ))}
      </div>
    </div>
  );
}

export default AdvertismentList;
