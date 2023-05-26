import React, { useState, useEffect } from "react";
import Card from "./Card";
import spin from '../images/loader.gif';

// https://api.themoviedb.org/3/movie/{movieid}?api_key={apikey}&language=en-US  to get movie data 
// https://api.themoviedb.org/3/trending/all/day?api_key={apikey}  trending movies data
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=1d870a7210df63ddf50fde18668e7a10
// https://www.youtube.com/watch?v=BdJKm16Co6M trailer
// https://api.themoviedb.org/3/movie/1726/videos?api_key=1d870a7210df63ddf50fde18668e7a10 yotube key


const Result = () => {
    const [data, setdata] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("/data").then((res) =>
            res.json().then((data) => {
                setdata(data);
            })
        );
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=1d870a7210df63ddf50fde18668e7a10")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovies(data.results)
            })


    }, []);
    return (
        <>
            <div className="col-md-12 result">
                <div className="col-md-10 display">
                    {
                        data.length > 0 ?
                            data.map((val, index) => {
                                return (
                                    <Card
                                        link={val.link}
                                        title={val.title}
                                        id={val.id}
                                        rate={val.rate}
                                    />
                                );
                            }) : <div className="load">
                                <img id="gear" src={spin}/>
                            </div>}
                </div>
            </div>
            <div class="trending" id="trend">
                <div className="trend">
                <h2>Trending Movies</h2>
                </div>
                <div className="col-md-12 result trending-conatiner">
                    <div className="col-md-10 display">
                        {
                            movies.slice(0, 5).map((key) => {
                                return (
                                    <Card
                                        link={key.poster_path}
                                        title={key.title ? key.title : key.name}
                                        id={key.id}
                                        rate={key.vote_average}
                                    />
                                );
                            })

                        }
                    </div>
                </div>
                <div className="col-md-12 result trending-conatiner">
                    <div className="col-md-10 display">
                        {
                            movies.slice(5, 10).map((key) => {
                                return (
                                    <Card
                                        link={key.poster_path}
                                        title={key.title ? key.title : key.name}
                                        id={key.id}
                                        rate={key.vote_average}
                                    />
                                );
                            })

                        }
                    </div>
                </div>
                <div className="col-md-12 result trending-conatiner">
                    <div className="col-md-10 display">
                        {
                            movies.slice(15, 21).map((key) => {
                                return (
                                    <Card
                                        link={key.poster_path}
                                        title={key.title ? key.title : key.name}
                                        id={key.id}
                                        rate={key.vote_average}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result;