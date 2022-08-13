import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Header from "./header";

import "bootstrap/dist/css/bootstrap.css";
import PackageList from "../components/packagesList";
import AdvertismentList from "../components/advertismentList";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useSearchParams } from "react-router-dom";

import { listMyPackageAsync } from "../app/redux/package/packageSlice";
import Footer from "../components/footer";
let avdImg = `/GitHub-Logo.png`;
let awsImg = `/aws.png`;
export default function MyPackages() {
  let [searchParams] = useSearchParams();

  let search = searchParams.get("q");

  const { myPackages } = useAppSelector((state) => state.package);
  const {  user } = useAppSelector((state) => state.user);
  console.log({ myPackages }, user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if(user && user['user_id']){
      dispatch(listMyPackageAsync(user['user_id']));
    }
  }, [search, dispatch,user]);

  return (
    <div>
      <head>
        <title>Ghaida App </title>
        <meta name="description" content="Ghaida app" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <Header />
      <div className="page-wrapper">
        <div className="search-course">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-2">
                <PackageList packages={myPackages} />
              </div>
              <div className="col-md-3 offset-1">
                <AdvertismentList
                  advertisment={[
                    { name: "Sponsored", img: avdImg },
                    { name: "", img: awsImg },
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
