import { useState, useEffect } from "react";

const Reviews = (props) => {
  // console.log(props.data);

  return (
    <div className="reviewOut">
      <div className="reviewHead">Reviews</div>

      <div className="userName">{props.data.userId.name} says: </div>
      <div className="reviewBlock">{props.data.review}</div>
      <div className="starsReview"> rating is : {props.data.rating}</div>
    </div>
  );
};

export default Reviews;
