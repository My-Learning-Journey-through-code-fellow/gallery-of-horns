import React from "react";
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beastData.image_url} alt={this.props.beastData.keyword} />
          <br></br>
          {this.props.beastData.description}

        </Modal.Body>
      </Modal>
    );
  }
}


export default SelectedBeast;