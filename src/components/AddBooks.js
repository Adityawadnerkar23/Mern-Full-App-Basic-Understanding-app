import axios from 'axios';
import React, { useState } from 'react'
import './style.css';

 const Addbook = () => {
const[book_name,setBookName]=useState('');
const[book_price,setBookPrice]=useState('');
const[author_name,setAuthorName]=useState('');
const[publication_name,setPublicationName]=useState('');

const handleSubmit = async (e)=>{
    e.preventDefault();
    const newcollection={book_name,book_price,author_name,publication_name};
    try{
        const response = await axios.post('http://localhost:5000/api/post_collection',newcollection)
        setBookName('');
        setBookPrice('');
        setAuthorName('');
        setPublicationName('');
    }catch(error){
        console.log(error,'error addding');
    }
};

    return(
        <div className="container" style={{ backgroundColor: 'Highlight', padding: '20px', color: 'black' }}>
            <form onSubmit={handleSubmit}>
        <div className='container-lg'>
        <div className='container mb-5'>
            <div className='row'>
            <h4 align="center">BOOKS INFORMATION</h4>
                <div className='col-md-4'>
                <strong>
                <span style={{color:'black',fontSize:'12px'}}>BOOK NAME</span>
                </strong>
                <label htmlFor="name" className='form-label'></label>
                <input type="text" 
                className='form-control' 
                name="name" 
                placeholder='Enter Book Name'
                value={book_name}
                onChange={(e)=>setBookName(e.target.value)}
                required
                />
                </div>
                <div className='col-md-4'>
              <div className='mb-3'>
                <strong>
                <span style={{ color: 'black',fontSize:'12px'}}>BOOK PRICE</span>
                </strong>
                <label htmlFor="price" className='form-label'></label>
                <input type='number' 
                className='form-control' 
                name="number"
                value={book_price}
                onChange={(e)=>setBookPrice(e.target.value)} 
                placeholder='Enter Book Price '  />
               </div>
              </div>
            <div className='col-md-4'>
              <div className='mb-3'>
                <strong>
                <span style={{ color: 'black',fontSize:'12px'}}>AUTHOR NAME</span>
                </strong>
                <label htmlFor="name" className='form-label'></label>
                <input type='text' 
                className='form-control' 
                name="name" 
                value={author_name}
                onChange={(e)=>setAuthorName(e.target.value)}
                placeholder='Enter Author Name '  />
              </div>
            </div>
            <div className='col-md-4'>
            <div className='mb-3'>
            <strong>
            <span style={{ color: 'black',fontSize:'12px'}}>PUBLICATION NAME</span>
            </strong>
            <label htmlFor="publication" className='form-label'></label>
            <input type='text' 
            className='form-control' 
            name="text"
            value={publication_name}
            onChange={(e)=>setPublicationName(e.target.value)} 
            placeholder='Enter Publication Name '  />
            </div>
            </div>
            </div>
</div>
        </div>
        <div className='card-footer'>
    <button className='btn-btn-sucess' 
    align='center' 
    type="submit">Add Data</button>
  </div>
  </form>
    </div>
    )
 }
 export default Addbook