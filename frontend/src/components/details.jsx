import { useState, useEffect } from "react";
import Review from "./Review";

const backend_host =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_HOST_PROD
    : process.env.REACT_APP_BACKEND_HOST;

const Details = ({ movie }) => {
  const [isReviews, setReviews] = useState([]);

  //console.log(movie);

  const fetchReview = async (id) => {
    const url = `${backend_host}/api/review/${id}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    setReviews(jsonData);
  };

  //console.log(isReviews.length);

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
      <div className="reviewsDiv">
        {isReviews.length
          ? isReviews.map((data, iterator) => (
              <Review key={iterator} data={data}></Review>
            ))
          : "no reviews"}
      </div>
    </div>
  );
};

export default Details;
