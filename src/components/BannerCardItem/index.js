// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <div className="card">
      <li className={className}>
        <div className="dis">
          <h1 className="heading">{headerText}</h1>
          <p className="description">{description}</p>
          <button className="show-more-btn" type="button">
            Show More
          </button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
