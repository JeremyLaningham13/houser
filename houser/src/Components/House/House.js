import React, { Component } from 'react'

export default class House extends Component {
 
    render() {
        const { name, address, city, state, zip } = this.props.house;
        return(
            <div>
                <h1>House</h1>
                <h2>Property Name: {name}</h2>
                <h2>Address: {address}</h2>
                <h2>City: {city}</h2>
                <h2>State: {state}</h2>
                <h2>Zip: {zip}</h2>
                <button onClick={() => {this.props.removeHouse(this.props.id)}}>Delete</button>
            </div>
        )
    }
}