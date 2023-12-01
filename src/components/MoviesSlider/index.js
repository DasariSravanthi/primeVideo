// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {categoryMoviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {categoryMoviesList.map(eachMovieItem => (
        <MovieItem movieDetails={eachMovieItem} key={eachMovieItem.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
