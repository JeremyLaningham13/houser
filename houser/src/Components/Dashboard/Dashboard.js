import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

// Components
import House from "../House/House";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses = () => {
    axios
      .get('/api/houses')
      .then((response) => {
        this.setState({ houses: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   addHouse = newArr => {
//       this.setState({houses: newArr})
//   }

  removeHouse = (id) => {
      axios.delete(`/api/houses/${id}`)
      .then(() => this.getHouses())
  }

  render() {
    let mappedHouses = this.state.houses.map((val, index) => {
      return <House house={val} key={val.id} removeHouse={this.removeHouse} />;
    });

    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/wizard"><button>Add New Property</button></Link>
        {mappedHouses}
      </div>
    );
  }
}

