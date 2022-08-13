import React, { useEffect } from "react";
import Header from "../header";
import "bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  createPackageCommentAsync,
  listPackageAsync,
  listPackageCommentsAsync,
} from "../../app/redux/package/packageSlice";
import PackageBannerDetail from "../../components/packagebannerdetail";
import CommentList from "../../components/commentslist";
import CommentBox from "../../components/commentbox";

export default function PackageDetail() {
  const { auth, user } = useAppSelector((state) => state.user);
  const { packages, comments } = useAppSelector((state) => state.package);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(listPackageAsync());
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const singlePackage = packages.find(
    (x) => x.package_id === searchParams.get("id")
  );

  useEffect(() => {
    dispatch(listPackageCommentsAsync(`${searchParams.get("id")}`));
  }, [singlePackage]);

  function handleClick(data: any) {
    dispatch(
      createPackageCommentAsync(
        { ...data, package_id: searchParams.get("id") },
        auth
      )
    );

    setTimeout(() => {
      dispatch(listPackageCommentsAsync(`${searchParams.get("id")}`));
    
    }, 3000);
  }


  return (
    <div>
      <Header />
      <PackageBannerDetail data={singlePackage} />
      <div className="container">
        <div className="row">
        <div className="col-lg-7 position-relative">
            <br />
            <CommentList
              data={
                comments && comments.length !== 0 ? [...comments].reverse() : []
              }
              owner={user?.user_id===singlePackage.user_id}
            />
          </div>
          <div className="col-lg-4 offset-sm-1 position-relative">
            {auth && <CommentBox submitData={handleClick} />}
          </div>
     
        </div>
      </div>
    </div>
  );
}
