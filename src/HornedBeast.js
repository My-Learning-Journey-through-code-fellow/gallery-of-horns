import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.url} alt=""/>
        <h2>{this.props.name}</h2>
        <p>{this.props.about}</p>
      </article>
    )
  }
}

export default HornedBeast;