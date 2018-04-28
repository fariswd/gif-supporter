import React from 'react'
import axios from 'axios'

export default class Randomizer extends React.Component {
  constructor(){
    super()
    this.state = {
      currentImage: '',
      loading: false,
      timeout: 5000,
    }
  }
  componentDidMount() {
    // this.getImage()
    document.title = "Random Gif Generator xD"
    this.getImage()
  }
  refresh() {
    setTimeout(() => {
      this.getImage()
    }, this.state.timeout);
  }
  getImage() {
    this.setState({loading: true, currentImage: ''})
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=<giphy_api_key>&tag=dancing')
    .then(({data: {data}}) => {
      this.setState({
        loading: false,
        currentImage: data.image_original_url
      })
      this.refresh()
    })
    .catch(err => console.lo(err))
  }
  render() {
    return (
      <div>
        <div style={{width: '700px'}}>
          {!this.state.loading
            && <img style={{width: '100%'}} onClick={() => this.getImage()} src={this.state.currentImage} />
          }
        </div>
      </div>
    )
  }
}
