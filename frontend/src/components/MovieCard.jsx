import { Link } from "react-router-dom";
import { useState } from "react";
import Details from "./details";
import styled from "styled-components";

const MovieCard = ({ movie, user }) => {
  const [isOpen, setOpen] = useState(false);

  /*   console.log(movie); */

  const CardOutDiv = styled.div`
    position: relative;
    padding: 0.5rem;
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

  return (
    <CardOutDiv
      background={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      details={isOpen}
    >
      <div className="cardInDiv">
        {/* <Link to={`/movie/${movie.id}`}> */}
        {/* -- csak amíg nincs adat -- */}
        <Link to={`/movie/`}>
          <h5 className="cardNameDiv">{movie.original_title}</h5>
        </Link>
        {isOpen ? <Details movie={movie}></Details> : ""}
        <div className="detailButtonDiv" onClick={() => setOpen(!isOpen)}>
          {isOpen ? "Less Details" : "More Details"}
        </div>

        <div className="addRevButton">
          {user ? "add review" : "Sign up to write rewiev"}
        </div>
        {user && <button className="">Add review</button>}
      </div>
    </CardOutDiv>
  );
};

export default MovieCard;
