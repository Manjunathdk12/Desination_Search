import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    showWrongIcon: false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value, showWrongIcon: true})
  }

  onClearSearch = () => {
    this.setState({searchInput: '', showWrongIcon: false})
  }

  onBlurSearch = () => {
    this.setState({showWrongIcon: false})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput, showWrongIcon} = this.state

    const filteredDestinations = destinationsList.filter(eachImage =>
      eachImage.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="searchBox"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              onBlur={this.onBlurSearch}
            />
            {showWrongIcon && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/wrong-icon-img.png"
                alt="wrong icon"
                className="wrong-icon"
                onClick={this.onClearSearch}
              />
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="img-container">
            {filteredDestinations.map(eachImage => (
              <DestinationItem imageDetails={eachImage} key={eachImage.id} />
            ))}
          </ul>
          <p className="footer">
            <a href="https://github.com/Manjunathdk12">Coded by Manjunath DK</a>
          </p>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
