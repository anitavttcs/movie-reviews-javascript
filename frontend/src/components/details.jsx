import { useState, useEffect } from "react";

const Details = ({ movie }) => {
  const [isReviews, setReviews] = useState([]);

  console.log(movie);

  const fetchReview = async (id) => {
    const url = `http://localhost:5000/api/review/${id}`;
    console.log("url is", url);
    const result = await fetch(url);
    const jsonData = await result.json();
    setReviews(jsonData);
  };

  console.log(isReviews.length);

  useEffect(() => {
    fetchReview(movie.id);
  }, []);

  // console.log(movie);
  return (
    <div className="detailsDiv">
      <div>Overview:</div>
      <div>{movie.overview}</div>
      <div>
        <span>Relase Date: </span>
        <span>{movie.release_date}</span>asd
      </div>
      <div className="reviewsDiv">{isReviews.length ? "review" : "no reviews"}</div>
    </div>
  );
};

export default Details;
