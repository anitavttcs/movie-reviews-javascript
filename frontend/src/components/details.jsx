import { useState, useEffect } from "react";

import Review from "./Review";

const Details = ({ movie }) => {
  const [isReviews, setReviews] = useState([]);

  //console.log(movie);

  const fetchReview = async (id) => {
    const url = `http://localhost:5000/api/review/${id}`;

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
      <div className="detailsHead">Overview:</div>
      <div className="overviewDiv">{movie.overview}</div>
      <div className="relaseDiv">
        <span>Relase Date: </span>
        <span>{movie.release_date}</span>asd
      </div>
      <div className="reviewsDiv">
        <div className="reviewHead">Reviews</div>
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
