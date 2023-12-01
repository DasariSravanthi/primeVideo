// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-video-img"
        alt="prime video"
      />
      <div className="video-slider-background">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider categoryMoviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider categoryMoviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
