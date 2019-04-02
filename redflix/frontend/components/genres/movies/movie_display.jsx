import React from 'react';
import {Redirect} from 'react-router-dom';

class MoviePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { video: null, clicked: false, returnPath: "", msg: ""};
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

handleMouseEnter() {
      this.setState({ msg: ' Go Back'});
}

handleMouseLeave() {
    this.setState({ msg: ''});
}

handleClick() {
    this.setState({ clicked: true, returnPath: this.props.genrePageId === "main" ? "" : this.props.genrePageId})
}
        
 componentDidMount() {
    this.props.fetchMovie(this.props.movieId || this.props.genreMovieId);
 }

 render() {
    if (this.state.clicked) return <Redirect to={`/browse/${this.state.returnPath}`} />
    if (this.props.movies[this.props.movieId || this.props.genreMovieId]) {
    return (
        <div>
            <span className="go-back" onClick={this.handleClick}><i 
            onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave}
            class="fas fa-arrow-left"></i> {this.state.msg}</span>
            <video className="movie-list-movie-play" controls>
            <source src={this.props.movies[this.props.movieId || this.props.genreMovieId].video} type="video/mp4"/>
          
            Your browser does not support the video tag.
           </video>
      </div>)

    } else {
        return null;
    }
        }


}

export default MoviePlay;