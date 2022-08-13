import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { listPackageCommentsAsync, removePackageCommentAsync } from "../app/redux/package/packageSlice";
const remImg = "../../assets/rem.png"

export default function CommentList({ owner, data }: { data: any[], owner:boolean }) {
  const dispatch = useAppDispatch();
  const { auth, user } = useAppSelector((state) => state.user);
  console.log(user);
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(id: any) {
    dispatch(
      removePackageCommentAsync( id, auth)
    );
    setTimeout(() => {
      dispatch(listPackageCommentsAsync(`${searchParams.get("id")}`));
    
    }, 4000);
    }
  return (
    <div className="comment-list">
      {data.map((comment, i) => (
        <Card key={i} variant="outlined">
          <CardContent  >
            <div className="container">
            <div className="row">
            <div className="col-sm-11 ">
            <Typography
              sx={{ fontSize: 18 }}
              color="text.primary"
              gutterBottom
            >
              @{comment.User.name}
            </Typography>
            </div>
            <div className="col-sm-1 ">
         {(owner || comment.user_id===user?.user_id)? ( <img onClick={()=>{ handleClick(comment.comment_id)}} src={remImg} alt="" height={18} width={18} className=""/>):''}
            </div>
            </div>
            </div>
     
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {comment.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
