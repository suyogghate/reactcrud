import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
        <div className='w-90 bg-white rounded p-3'>
            <h2>Airport List</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>CloseTime</th>
                        <th>Code</th>
                        <th>Location</th>
                        <th>Name</th>
                        <th>No of Ports</th>
                        <th>OpenTime</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((airport,index)=>{
                        return <tr key={index}>
                            <td>{airport.id}</td>
                            <td>{airport.category}</td>
                            <td>{airport.close_time}</td>
                            <td>{airport.code}</td>
                            <td>{airport.location}</td>
                            <td>{airport.name}</td>
                            <td>{airport.no_of_ports}</td>
                            <td>{airport.open_time}</td>
                            <td>
                                <Link to={`/read/${airport.id}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/edit/${airport.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={()=>handleDelete(airport.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create</Link>
                </div>
            </table>
        </div>
    </div>
  )
}
