import { useState, useEffect } from "react";

const Reviews = (props) => {
  // console.log(props.data);

  let ratingArray = [];
  for (let index = 0; index < props.data.rating; index++) {
    ratingArray.push("🟊");
  }
  console.log(props.data.rating);

  return (
    <div className="reviewOut">
      <div className="revUserName">
        <span>{props.data.userId.name}</span>
        <span> says:</span>
      </div>
      <div className="reviewBlock">{props.data.review}</div>
      {/*  <div className="starsReview"> rating is : {props.data.rating}</div> */}
      <div className="starsReview">{ratingArray}</div>
    </div>
  );
};

export default Reviews;
