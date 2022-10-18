import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: 0,
    }
  }

  handlefaves = () => {
    this.setState({
      faves: this.state.faves + 1
    })
  }

  render() {
    return (
      <article>
        <img src={this.props.image_url} alt={this.props.keyword} />
        <h2>{this.props.title}</h2>
        <p>{this.state.faves} Favorites</p>
        <p onClick={this.handlefaves}>Favorite Me 💖</p>
        <p>{this.props.description}</p>
        <p>{this.props.horns} Horn(s)</p>
      </article>
    )
  }
}

export default HornedBeast;