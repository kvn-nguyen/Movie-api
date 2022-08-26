import React from "react";
import styles from "../styles/Home.module.css"

const imgKey = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return styles.green
    } else if (vote >= 6) {
        return styles.orange
    } else {
        return styles.red;
    }
}

const Movie = ({title, poster_path, overview, vote_average, release_date}) => {
    return (
        <div className={styles.movie}>
            <img src={poster_path ? imgKey + poster_path : "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" } alt={title} />
            <div className={styles.movieInfo}>
                <h3>{title}</h3>
                <span className={setVoteClass(vote_average)}>{vote_average}</span>
            </div>
            <div className={styles.movieOver}>
                <h2>Release Date:</h2>
                <p>{release_date}</p>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;