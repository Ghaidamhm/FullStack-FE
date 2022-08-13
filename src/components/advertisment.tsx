import React from "react";

function Advertisment(props:any,{   height=250,width=320 }) {
  return (
    <div className="">
      <div className="">
        <h2 className="section-title">{props.data?.name}</h2>
        {/* <a href=""> */}
          <div className="advertising-card">
            <div className="img">
              <img src={props.imgFile}  height={height} width={width}/>
            </div>
            <div className="content">
              <p>           
              {props.data?._source?.description}   
              </p>
            </div>
          </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default Advertisment;
