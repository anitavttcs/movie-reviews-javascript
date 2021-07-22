import { useState } from "react";
import StarRating from "./StarRating";

const backend_host =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_HOST_PROD
    : process.env.REACT_APP_BACKEND_HOST;

const AddReview = (props) => {
  const [rating, setRating] = useState(5);

  const handleChange = (value) => {
    setRating(value);
  };
  //console.log(props.user);

  const sendReview = () => {
    const sendObject = {
      movieId: props.movie.id,
      userId: props.user.sub,
      rating: rating,
      review: document.querySelector(".inputArea").value,
    };

    const url = `${backend_host}/api/review`;

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendObject),
    });

    props.close();
  };

  console.log(rating);
  /*   console.log("movie.id", props.movie.id);
  console.log("user.id", props.user.iat); */
  return (
    <div>
      <textarea
        className="inputArea"
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
        <button onClick={() => sendReview()}> send</button>
        <button onClick={props.close}> close</button>
      </div>
    </div>
  );
};

export default AddReview;
