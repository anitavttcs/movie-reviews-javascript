import { useState } from "react";
import styled from "styled-components";

import Details from "./details";
import AddReview from "./AddReview";

const MovieCard = ({ movie, user }) => {
  const [isDetails, setDetails] = useState(false);
  const [isReview, setReview] = useState(false);
  /*   console.log(movie); */

  const CardOutDiv = styled.div`
    position: relative;
    padding: 0.5rem 1rem;
    width: 50%;
    min-height: 15vh;
    margin: 1rem 1rem;
    background: ${(props) => `url(${props.background}) `};
    background-size: cover;
    background-color: hsla(253, 57%, 50%, 0.5);
    text-align: center;
    color: whitesmoke;
    text-shadow: 1px 1px 2px black, -1px -1px 2px black;
    /* opacity: ${(props) => (props.details ? `0.5` : `1`)}; */
  `;

  //console.log(`https://image.tmdb.org/t/p/original${movie.poster_path}`);

  const revButtonClick = () => {
    if (user) {
      setReview(!isReview);
    } else {
      console.log("ide beszúrhatjuk a logint");
    }
  };

  return (
    <CardOutDiv
      background={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      details={isDetails}
    >
      <div className="cardInDiv">
        <h5 className="cardNameDiv">{movie.original_title}</h5>

        {isDetails ? <Details movie={movie}></Details> : ""}
        <div className="detailButtonDiv" onClick={() => setDetails(!isDetails)}>
          {isDetails ? "Less Details" : "More Details"}
        </div>

        <div className="reviewDiv">
          {isReview ? (
            <AddReview
              close={() => setReview(false)}
              user={user}
              movie={movie}
            ></AddReview>
          ) : (
            <div className="addRevButton" onClick={() => revButtonClick()}>
              {user ? "Add review" : "Sign up to write rewiev"}
            </div>
          )}
        </div>
      </div>
    </CardOutDiv>
  );
};

export default MovieCard;
