import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Read = () => {
    const {id} = useParams();
    const [airport,setAirport] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res);
            setAirport(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-content-center'>
        <div className='w-75 h-60 m-auto bg-white rounded p-3'>
            <div className='p-2'>
                <h2>Airport Details: </h2>
                <h4>Id: {airport.id}</h4>
                <h4>Category: {airport.category}</h4>
                <h4>Close Time: {airport.close_time}</h4>
                <h4>Airport Code: {airport.code}</h4>
                <h4>Location: {airport.location}</h4>
                <h4>Name of Airport: {airport.name}</h4>
                <h4>No. of Ports:  {airport.no_of_ports}</h4>
                <h4>Open Time: {airport.open_time}</h4>
            </div>
            <Link to="/" className='btn btn-primary me-2'>Back</Link>
            <Link to={`/edit/${airport.id}`} className='btn btn-info'>Edit</Link>
        </div>
    </div>
  )
}
