import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image_url} alt={this.props.keyword}/>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;