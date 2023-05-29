import React, { Component } from 'react'
import ClassCard from './ClassCard'

export default class ClassCardContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
        users:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data=>this.setState({users:data}))


    }



    render() {
        return (
        <div>
            <h1>Class Users Data</h1>
            <div className='card-container'>
            {
                this.state.users && this.state.users.map((user,index)=>{
                return <ClassCard user={user} index={index}/>
                })
            }
            </div>
            
        </div>
        )
    }
}
