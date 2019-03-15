import React from "react";

const GifList = (props) => {

  return (
    <div>
    <ul>
    </ul>
    {props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
    </div>
  )
}

export default GifList
