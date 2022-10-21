import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      faves: 0,
    }
  }

  handleFaves = () => {
    this.setState({
      faves: this.state.faves + 1
    })
  }


  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.props.handleOpenModal}
          variant="top"
          src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <p>{this.state.faves} Favorites</p>
            <p>{this.props.description}</p>
            <p>{this.props.horns} Horn(s)</p>
          </Card.Text>
          <Button onClick={this.handleFaves} variant="outline-danger">Favorite Me 💖</Button>
        </Card.Body>
      </Card>
    );

  };
}
export default HornedBeast;