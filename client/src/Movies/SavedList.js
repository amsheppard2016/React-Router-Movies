import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
    <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
            <NavLink exact to={`/movies/${movie.id}`}>
                {movie.title}
            </NavLink>
            // <span className="saved-movie">{movie.title}</span>
        ))}
        <Link to="/">Home</Link>
    </div>
);

export default SavedList;
