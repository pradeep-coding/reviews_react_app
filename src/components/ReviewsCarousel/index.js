import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onRightSwipe = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props
    const reviewsLength = reviewsData.length
    if (activeReviewIndex < reviewsLength - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onLeftSwipe = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    const profileUrl = reviewsData[activeReviewIndex].imgUrl
    const profileName = reviewsData[activeReviewIndex].username
    const company = reviewsData[activeReviewIndex].companyName
    const comment = reviewsData[activeReviewIndex].description

    return (
      <div className="reviews-bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-change-container">
          <button
            type="button"
            testid="leftArrow"
            onClick={this.onLeftSwipe}
            className="arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="avatar"
            />
          </button>
          <div className="review">
            <img
              src={profileUrl}
              alt={`${profileName}-avatar`}
              className="profile-picture"
            />
            <p className="username">{profileName}</p>
            <p className="company-name">{company}</p>
            <p className="description">{comment}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="arrow"
            onClick={this.onRightSwipe}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="avatar"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
