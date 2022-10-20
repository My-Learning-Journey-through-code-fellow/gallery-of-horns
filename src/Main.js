import React from "react";
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((hornedAnimal, index) => {
      return <HornedBeast
        _id={hornedAnimal._id}
        image_url={hornedAnimal.image_url}
        title={hornedAnimal.title}
        description={hornedAnimal.description}
        keyword={hornedAnimal.keyword}
        horns={hornedAnimal.horns}
        key={index}
        handleOpenModal={ () => this.props.handleOpenModal(hornedAnimal)}
      />
    });

    return (
      <>
        <main>
          {beasts}
        </main>
      </>
    )
  }
}

//----images sourced from: https://unsplash.com/
//----data about animals sourced from Google Search

export default Main;