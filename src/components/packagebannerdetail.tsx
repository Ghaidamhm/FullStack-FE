import React from "react";

import Rating from "@mui/material/Rating";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { listPackageAsync, updatePackageAsync } from "../app/redux/package/packageSlice";

function PackageBannerDetail(props: any) {
  const dispatch = useAppDispatch();

  const { auth } = useAppSelector((state) => state.user);
  const onSubmit = async (rating: number) => {
    console.log({ auth });
    try {
      dispatch(
        updatePackageAsync(
          props.data.package_id,
          { package_id: props.data.package_id, rating },
          auth
        )
      );
     setTimeout(() => {
      dispatch(listPackageAsync());
     }, 3000);
    } catch (error) {}
  };
  console.log("props.data.rating",props.data.rating);
  
  if (!props.data) return null;
  return (
    <section className="banner-detail-courses section-spacer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="banner-title ">{props.data.name}</h2>
            <p>{props.data.package_description}</p>
            <p>
              Rating:
              <Rating
                name="rating"
                value={props.data.rating}
                onChange={(
                  e: React.SyntheticEvent<Element, Event>,
                  newValue
                ) => {
                  console.log("e.currentTarget", newValue);
                  if (newValue && newValue > 0) onSubmit(+newValue);
                }}
              />
            </p>

            <p>
              Recommended: <span>{props.data.recommended ? "Yes" : "No"}</span>
            </p>
          </div>
          <div className="col-lg-4 offset-lg-1 position-relative">
            <div className="offer-card">
              <h3 className="title">Offered By</h3>
              {props.data.name}

              <div className="course-includance">
                <h3>Package Details:</h3>
                <div className="included-items">
                  <p>{props.data.package_description}</p>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageBannerDetail;
