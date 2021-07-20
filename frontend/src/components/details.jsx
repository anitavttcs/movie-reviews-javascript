import { useState } from "react";

const Details = ({ movie }) => {
  return (
    <div className="detailsDiv">
      <div>{movie.overview}</div>
      <div>
        <span>Relase Date: </span>
        <span>{movie.release_date}</span>
      </div>
      <div>
        <span>Director</span>
      </div>
      <div>
        <span>Cast</span>
      </div>
      <div>
        <span>Bármi</span>
      </div>
      <div>
        <span>Még Bármibb</span>
      </div>
    </div>
  );
};

export default Details;
