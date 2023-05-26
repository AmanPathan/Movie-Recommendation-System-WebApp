import React,{useState,useLayoutEffect} from "react";

const Card = (props) => {
  const rating = (Math.round((props.rate) * 100) / 100).toFixed(1);
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 ">
            <div className="card-container">
              <div className="card-img" style={{ backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url(https://image.tmdb.org/t/p/w500/${props.link})` }} >
                <p className="rating"><span>★</span>{rating}</p>
                <a className="card-link" target="_blank" href={`https://www.imdb.com/title/${props.id}`} >Watch Now <i class="fas fa-play-circle" style={{color:'#f6d658'}}></i></a>
              </div>
            </div>
            <div className="movie_name">
              <h3>{props.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;