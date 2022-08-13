import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Header from "./header";

import "bootstrap/dist/css/bootstrap.css";
import PackageList from "../components/packagesList";
import AdvertismentList from "../components/advertismentList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useSearchParams } from "react-router-dom";

import { listPackageAsync } from "../app/redux/package/packageSlice";
import Footer from "../components/footer";
let avdImg = `/aws.png`;
let gitImg = `/GitHub-Logo.png`;
export default function Search() {
  let [searchParams, setSearchParams] = useSearchParams();

  let search = searchParams.get("q");

  const { packages } = useAppSelector((state) => state.package);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(listPackageAsync(search));
  }, [search, dispatch]);

  return (
    <div>
    

      <Header />
      <div className="page-wrapper">
        <div className="search-course">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-2">
                <PackageList packages={packages} />
              </div>
              <div className="col-md-3 offset-1">
                <AdvertismentList
                  advertisment={[
                    { name: "Sponsored", img: gitImg },
                    { name: "", img: avdImg },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer  /> 
    </div>
  );
}
