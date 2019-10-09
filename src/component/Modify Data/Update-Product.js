import React from 'react';
import './Adding.css';
import {Link} from 'react-router-dom';

class UpdateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            updateitem: {}
        }
    }

    updateid = this.props.match.params.id

    componentDidMount(){
        fetch('/update-product/'+this.updateid)
        .then((res) => res.json())
        .then(rows => this.setState({updateitem: rows[0]}, () => console.log('Customers fetched...', rows[0])))
    }

    changeInput=(event)=>{
        var inputvalue = event.target.value
        var nameinput = event.target.name

        this.setState(() => {
            let updateitem = Object.assign({}, this.state.updateitem, {[nameinput]: [inputvalue]});  
            return { updateitem };                                 
          })
    }

    render(){
        return(
            <form action={'/updating-product/'+this.updateid} method='Post'>
                <h1>Update Product</h1>
                <div className='form-group'>
                    <label>ProductName</label>
                    <input name='productname' className="form-control" type='text' placeholder='Product Name...' value={this.state.updateitem.productname || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>ProductImage</label>
                    <input name='image' className="form-control" type='text'  placeholder='Image URL...' value={this.state.updateitem.image || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>ProductPrice</label>
                    <input name='price' className="form-control" type='text' placeholder='Price...' value={this.state.updateitem.price || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>ProductInfo</label>
                    <textarea name='info' className="form-control" type='text' placeholder='Info...' value={this.state.updateitem.info || ''} onChange={this.changeInput}></textarea>
                </div>
                <div className='form-group'>
                    <label>ProductType</label>
                    <input name='type' className="form-control"  type='text' placeholder='Type will be dropdown menu' value={this.state.updateitem.type || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <Link to='/admin/menu'><button className='btn btn-danger' >Cancel</button></Link>
                    <button className='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        )
    }
}

export default UpdateProduct