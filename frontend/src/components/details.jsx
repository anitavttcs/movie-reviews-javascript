import { useState } from "react";

const Details = ({ movie }) => {
  console.log(movie);
  return (
    <div className="detailsDiv">
      <div>{movie.overview}</div>
      <div>
        <span>Relase Date: </span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default Details;
