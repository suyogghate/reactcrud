import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [values,setValues] = useState({
        category: '',
        close_time: '',
        code: '',
        location: '',
        name: '',
        no_of_ports: '',
        open_time: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/airport', values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Airport</h2>
                <div className='mb-2'>
                    <label htmlFor="">Category: </label>
                    <input type="text" placeholder='Enter category(semigovt,govt,etc..)' className='form-control' onChange={e=>setValues({...values, category:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">CloseTime: </label>
                    <input type="text" placeholder='Enter close time' className='form-control' onChange={e=>setValues({...values, close_time:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Code: </label>
                    <input type="text" placeholder='Enter code' className='form-control' onChange={e=>setValues({...values, code:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Location: </label>
                    <input type="text" placeholder='Enter location' className='form-control' onChange={e=>setValues({...values, location:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder='Enter name of airport' className='form-control' onChange={e=>setValues({...values, name:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">No. of Ports: </label>
                    <input type="text" placeholder='Enter no of ports' className='form-control' onChange={e=>setValues({...values, no_of_ports:e.target.value})} size={50}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Open time: </label>
                    <input type="text" placeholder='Enter opening time' className='form-control' onChange={e=>setValues({...values, open_time:e.target.value})} size={50}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}
