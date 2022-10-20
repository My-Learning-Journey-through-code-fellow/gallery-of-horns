//imports
import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json'
import Modal from 'react-bootstrap/Modal';

//class compnonents
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src= {this.state.selectedBeast.image_url} alt={this.state.selectedBeast.keyword}/>
            <br></br>
            {this.state.selectedBeast.description}

          </Modal.Body>
        </Modal>
        <Footer />
      </>
    )
  }
}



//export
export default App;
