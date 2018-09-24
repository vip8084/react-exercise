import React, { Component } from 'react';
import { getMovies } from "../services/movies";

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies()
        }
    }
    
    render() {

        const genres = [...new Set(this.state.movies.map(movie => movie.genre))];
        genres.sort();
        
        return (

            <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-allGenres-list" data-toggle="list" href="#" role="tab" aria-controls="allGenres">All Genres</a>
                {genres.map(genre => (
                        <a className="list-group-item list-group-item-action" id={"list-"+genre+"-list"} data-toggle="list" href="#" role="tab" aria-controls={genre} key={genre}>{genre}</a>
                    ))}
            </div>
                
        );
    }
}

export default Genres;