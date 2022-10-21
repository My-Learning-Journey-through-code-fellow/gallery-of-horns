import React from "react";
import data from './data.json';
import Form from 'react-bootstrap/Form';



class HornForm extends React.Component {


  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(beast => beast.horns === 1);
      this.props.filteredData(newData)

    }
    else if (selected === '2') {
      let newData = data.filter(beast => beast.horns === 2);
      this.props.filteredData(newData)

    }
    else if (selected === '3') {
      let newData = data.filter(beast => beast.horns === 3);
      this.props.filteredData(newData)
    }
    else if (selected === '100') {
      let newData = data.filter(beast => beast.horns === 100);
      this.props.filteredData(newData)
    }
    else {
      
    }
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Number of Horns</legend>
          <select name="selected" id="" onChange={this.handleSelect}>
            <option value="All"># of Horns</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </select>
        </fieldset>
        <button type="Submit">All</button>
      </Form>

    )
  }
}

export default HornForm;