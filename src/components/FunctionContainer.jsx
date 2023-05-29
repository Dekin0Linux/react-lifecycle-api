import React,{ useEffect, useState }  from 'react'
import axios from 'axios'
import FunctinCard from './FunctinCard'


function FunctionContainer() {

    const [users,setUsers] = useState()

    const getUsers =async()=>{
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp=>setUsers(resp.data))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getUsers()
    },[users])


    return (
        <div>
            <h2 style={{textAlign:'center'}}>Functional Users</h2>
            <div className='card-container'>
                {
                users && users.map((user,index)=>{
                    return <FunctinCard user={user} index={index}/>
                })
                }
            </div>

            

        </div>
        
        
    )

}

export default FunctionContainer