// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = props => {
  return (
    <ul className='review-list'>
      {props.reviews.map( (review, index) => <li key={index} className='review'> {review.display_title}</li>)}
    </ul>
  )
}
export default MovieReviews
