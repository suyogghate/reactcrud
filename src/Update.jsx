import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    // const [airport,setAirport] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res);
            setValues(...values,res.data[0].category, res.data[0].close_time, res.data[0].code, res.data[0].location, res.data[0].name, res.data[0].no_of_ports);
        })
        .catch(err => console.log(err))
    },[])

    const [values,setValues] = useState({
        category: '',
        close_time: '',
        code: '',
        location: '',
        name: '',
        no_of_ports: '',
        open_time: ''
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,values)
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update Airport</h2>
                <div className='mb-2'>
                    <label htmlFor="">Category: </label>
                    <input type="text" placeholder='Enter category(semigovt,govt,etc..)' className='form-control' value={values.category} onChange={e=>setValues({...values, category:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">CloseTime: </label>
                    <input type="text" placeholder='Enter close time' className='form-control' value={values.close_time} onChange={e=>setValues({...values, close_time:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Code: </label>
                    <input type="text" placeholder='Enter code' className='form-control' value={values.code} onChange={e=>setValues({...values, code:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Location: </label>
                    <input type="text" placeholder='Enter location' className='form-control' value={values.location} onChange={e=>setValues({...values, location:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder='Enter name of airport' className='form-control' value={values.name} onChange={e=>setValues({...values, name:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">No. of Ports: </label>
                    <input type="text" placeholder='Enter no of ports' className='form-control' value={values.no_of_ports} onChange={e=>setValues({...values, no_of_ports:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Open time: </label>
                    <input type="text" placeholder='Enter opening time' className='form-control' value={values.open_time} onChange={e=>setValues({...values, open_time:e.target.value})} size={50}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}
