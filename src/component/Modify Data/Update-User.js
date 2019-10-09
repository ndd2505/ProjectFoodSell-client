import React from 'react';
import './Adding.css';

class UpdateUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
            updateitem: {}
        }
    }

    updateid = this.props.match.params.id

    componentDidMount(){
        fetch('/update-user/'+this.updateid)
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
        console.log(this.state.updateitem);
        return(
            <form action={'/updating-user/'+this.updateid} method='Post'>
                <h1>UpdateUser</h1>
                <div className='form-group'>
                    <label>Username</label>
                    <input name='username' className="form-control" type='text' value={this.state.updateitem.username || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input name='password' className="form-control" type='text' value={this.state.updateitem.password || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>Hoten</label>
                    <input name='hoten' className="form-control" type='text' value={this.state.updateitem.hoten || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input name='email' className="form-control" type='email' aria-describedby="emailHelp" value={this.state.updateitem.email || ''} onChange={this.changeInput}></input>
                </div>
                <div className='form-group'>
                    <button className='btn btn-danger' type='reset'>Reset</button>
                    <button className='btn btn-primary' type='submit'>Update</button>
                </div>
            </form>
        )
    }
}

export default UpdateUser;