import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  queryMovies = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      this.setState({
        reviews: data.results,
      })
    }
  )}

  handleInputChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = string => {
    this.setState({ searchTerm: string })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={event => this.queryMovies(event)}>
            <label>
              Search
              <input id='search' name='search' type='text' onChange={event => this.handleInputChange(event)} value={this.state.input} />
              <button type='submit'>Search</button>
            </label>
          </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer
