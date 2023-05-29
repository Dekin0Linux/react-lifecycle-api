import React, { Component } from 'react'

export default class ClassCard extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div key={this.props.index} className='card'>
            <h3>Name: {this.props.user.name}</h3>
            <p>Username : {this.props.user.username}</p>
            <p>Email : {this.props.user.email}</p>
        </div>
    )
  }
}
