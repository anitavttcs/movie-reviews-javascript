import { useState } from "react";
import StarRating from "./StarRating";

const AddReview = (props) => {
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  };

  const sendReview = () => {};

  console.log(rating);
  /*   console.log("movie.id", props.movie.id);
  console.log("user.id", props.user.iat); */
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="45"
        rows="5"
        placeholder="write your review here"
      ></textarea>

      <div className="starsContainerDiv">
        <StarRating
          count={5}
          size={40}
          value={rating}
          activeColor={"yellow"}
          inactiveColor={"#ddd"}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={props.close}> close</button>
      </div>
    </div>
  );
};

export default AddReview;
