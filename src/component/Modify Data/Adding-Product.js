import React from 'react';
import './Adding.css';
import {Link} from 'react-router-dom';

class AddingProduct extends React.Component{
    
    render(){
        return(
            <form action='/add-product' method='Post'>
                <h1>Adding Product</h1>
                <div className='form-group'>
                    <label>ProductName</label>
                    <input name='productname' className="form-control" type='text' placeholder='Product Name...'></input>
                </div>
                <div className='form-group'>
                    <label>ProductImage</label>
                    <input name='image' className="form-control" type='text'  placeholder='Image URL...'></input>
                </div>
                <div className='form-group'>
                    <label>ProductPrice</label>
                    <input name='price' className="form-control" type='text' placeholder='Price...'></input>
                </div>
                <div className='form-group'>
                    <label>ProductInfo</label>
                    <input name='info' className="form-control" type='text' placeholder='Info...'></input>
                </div>
                <div className='form-group'>
                    <label>ProductType</label>
                    <input name='type' type='text' placeholder='Type will be dropdown menu'></input>
                </div>
                <div className='form-group'>
                    <Link to='/admin/menu'><button className='btn btn-danger' >Cancel</button></Link>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </div>
            </form>
        )
    }
}

export default AddingProduct