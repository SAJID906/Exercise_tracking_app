import React from 'react'
import './Nav.css';
import { useContext } from 'react';
import { flowdata } from '../App';
import FoData from './FoData';

function Activites() {

    const use=useContext(flowdata);

  return (
    <div className='container'>
     
      <div className='row'>
        <div className='col-lg-12'>
        <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
        {
         use.map((e)=>{
            return(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.Description}</td>
                    <td>{e.name}</td>
                </tr>
            )
         })
        }
       
      </table>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
            <form>
            
                <label>Enter Name</label>
                <input type='text' placeholder='Enter the Name'/>
        
         </form>
         </div>
      </div>
      <FoData/>
    </div>
  )
}

export default Activites
