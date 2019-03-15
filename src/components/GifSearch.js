import React from "react";

class GifSearch extends React.Component {
  state = {
    search: '',
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handing submit", "props:", this.props, "state:", this.state)
    this.props.fetchGifs(this.state.search)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default GifSearch
