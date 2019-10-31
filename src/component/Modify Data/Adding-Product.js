import React from 'react';
import './Adding.css';
import {Link} from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';

class AddingProduct extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            productname: "",
            image: "",
            price: "",
            info: "",
            type: "",
            productnameError: "",
            imageError: "",
            priceError: "",
            infoError: "",
            typeError: "",
        }
    }

    handleInput = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    validClient = (func) =>{
        let productnameError = ""
        let imageError = ""
        let priceError = ""
        let infoError = ""
        let typeError = ""

        if(this.state.productname === ""){
            productnameError = "Vui lòng nhập tên sản phẩm"
        }
        if(this.state.image === ""){
            imageError = "Vui lòng nhập đường dẫn "
        }
        if(this.state.price === ""){
            priceError = "Vui lòng nhập mức giá"
        }else{
            if(isNaN(this.state.price)){
                priceError = "Mức giá không hợp lệ. Vui lòng nhập số"
            }
        }
        if(this.state.info === ""){
            infoError = "Vui lòng nhập thông tin miêu tả"
        }
        if(this.state.type === ""){
            typeError = "Vui lòng chọn loại sản phẩm"
        }

        if( productnameError || imageError || priceError || infoError || typeError){
            this.setState({productnameError, imageError, priceError, infoError , typeError})
            return false
        }else{
            return func()
        }
        
    }

    handleSubmit=()=>{
        fetch('/add-product',{
            method:"post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "productname":this.state.productname,
                "image": this.state.image,
                "price": this.state.price,
                "info": this.state.info,
                "type": this.state.type
            })
        })
        .then((res) => {if(res.status === 200){window.location.replace("http://localhost:3000/admin/product")}})
    }

    render(){
        return(
            <div style={{textAlign:"center"}} >
                <h1>Adding Product</h1>
                <div className='form-group'>
                    <label>ProductName</label>
                    <input name='productname' className="form-control" type='text' placeholder='Product Name...' value={this.state.productname} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.productnameError) ? <ErrorIcon /> : null}
                          {this.state.productnameError}
                    </div>
                </div>
                <div className='form-group'>
                    <label>ProductImage</label>
                    <input name='image' className="form-control" type='text'  placeholder='Image URL...' value={this.state.image} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.imageError) ? <ErrorIcon /> : null}
                          {this.state.imageError}
                    </div>
                </div>
                <div className='form-group'>
                    <label>ProductType</label>
                    <select name="type" className="form-control" value={this.state.type} onChange={(e)=>this.handleInput(e)} >
                        <option></option>
                        <option>Cơm</option>
                        <option>Mì</option>
                        <option>Bún</option>
                        <option>Hải Sản</option>
                        <option>Tráng Miệng</option>
                        <option>Món Thêm</option>
                    </select>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.typeError) ? <ErrorIcon /> : null}
                          {this.state.typeError}
                    </div>
                </div>
                <div className='form-group'>
                    <label>ProductPrice</label>
                    <input name='price' className="form-control" type='text' placeholder='Price...' value={this.state.price} onChange={(e)=>this.handleInput(e)}></input>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.priceError) ? <ErrorIcon /> : null}
                          {this.state.priceError}
                    </div>
                </div>
                <div className='form-group'>
                    <label>ProductInfo</label>
                    <textarea name='info' className="form-control" type='text' placeholder='Info...' value={this.state.info} onChange={(e)=>this.handleInput(e)}></textarea>
                    <div style={{textAlign:"left", color:"red", fontSize:"1.2vw"}}>
                          {(this.state.infoError) ? <ErrorIcon /> : null}
                          {this.state.infoError}
                    </div>
                </div>
                
                <div className='form-group'>
                    <Link to='/admin/menu'><button className='btn btn-danger' >Cancel</button></Link>
                    <button className='btn btn-primary' onClick={()=>this.validClient(this.handleSubmit)}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddingProduct