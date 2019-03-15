import React from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs:[],
  }

  fetchGifs = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount(){
    console.log('mounted')
    this.fetchGifs()
  }

  render() {
    return (
      <div>
      {console.log("new state", this.state)}
      <GifSearch
        fetchGifs={this.fetchGifs}
      />
      <GifList
        gifs={this.state.gifs}
      />
      </div>
    )
  }
}
export default GifListContainer
