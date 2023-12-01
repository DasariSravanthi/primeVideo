// Write your code here
import './index.css'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <div className="close-button-container">
              <button
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
                type="button"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <ReactPlayer url={videoUrl} controls width="95%" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
