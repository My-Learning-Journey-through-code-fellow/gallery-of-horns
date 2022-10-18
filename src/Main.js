import React from "react";
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beasts = [];

    data.forEach((HornedAnimal, index) => {
      beasts.push (

        <HornedBeast
        _id = {HornedAnimal._id}
        image_url = {HornedAnimal.image_url}
        title = {HornedAnimal.title}
        description = {HornedAnimal.description}
        keyword = {HornedAnimal.keyword}
        horns = {HornedAnimal.horns}
        key = {index}
        />

      )
    })

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