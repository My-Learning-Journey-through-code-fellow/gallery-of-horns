import React from "react";
import HornedBeast from './HornedBeast.js';
import SelectedBeast from "./SelectedBeast.js";
import data from './data.json';
import HornForm from './HornForm.js'


class Main extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      beastArr: data,
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

  filteredData = (FiltArr) => {
    this.setState({
      beastArr: FiltArr
    })
  }

  render() {
    let beasts = this.state.beastArr.map((hornedAnimal, index) => {
      return <HornedBeast
        _id={hornedAnimal._id}
        image_url={hornedAnimal.image_url}
        title={hornedAnimal.title}
        description={hornedAnimal.description}
        keyword={hornedAnimal.keyword}
        horns={hornedAnimal.horns}
        key={index}
        handleOpenModal={() => this.handleOpenModal(hornedAnimal)}
      />
    });

    return (
      <main>
        <>
          <HornForm 
          filteredData = {this.filteredData}
          />
          {beasts}
          <SelectedBeast
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            beastData={this.state.selectedBeast}
          />
        </>
      </main>
    )
  }
}

//----images sourced from: https://unsplash.com/
//----data about animals sourced from Google Search

export default Main;