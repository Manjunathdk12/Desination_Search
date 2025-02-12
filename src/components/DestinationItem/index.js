import './index.css'

const DestinationItem = props => {
  const {imageDetails} = props
  const {name, imgUrl} = imageDetails

  return (
    <li className="img-box">
      <img src={imgUrl} alt={name} className="image" />
      <p className="img-name">{name}</p>
    </li>
  )
}

export default DestinationItem
