import React from 'react';
import SearchTool from '../ReUseAble/SearchTool';
import NextPrev from '../ReUseAble/NextPrev';
import './view.css';
import { connect } from "react-redux"
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const addtocart = (cartitem)=>{
  return{
      type: "add",
      cartitem
  }
}
const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));
function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
    )
  }

class ProductShow extends React.Component {

    constructor(){
        super();
        this.state = {
          rows: [],
          sortitem: 'productid',
          sortdes: 'ASC',
          searchobj: '',
          limititem: null,
          open: false
        }
        this.inputsearch= React.createRef();
      }
      i = 0
      componentDidMount() {
        fetch('/product/?orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
        .then((res) => res.json())
        .then(rows => this.setState({rows: rows}))
      }
    
        next = ()=>{
            this.i=this.i+9
            fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows})) 
        }
        prev = () =>{
            if(this.i>0){
                this.i=this.i-9
                fetch('/product/?search='+this.state.searchobj+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
                .then((res) => res.json())
                .then(rows => this.setState({rows: rows})) 
            }  
        }
        setSearchText=(text)=>{
          this.setState({searchobj: text})
          if(text===''){
            fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
            .then((res) => res.json())
            .then(rows => this.setState({rows: rows}))  
          }
          else{
          fetch('/product/?search='+text+'&orderby='+this.state.sortitem+'&sort='+this.state.sortdes+'&offset='+parseInt(this.i)+'&max=9')
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows}))
          }
        }
        
        sort=(sortitem, sortdes)=>{
          this.i = 0
          this.setState({sortitem: sortitem, sortdes: sortdes})
          fetch('/product/?search='+this.state.searchobj+'&orderby='+sortitem+'&sort='+sortdes+'&offset='+parseInt(this.i)+'&max=9')
          .then((res) => res.json())
          .then(rows => this.setState({rows: rows}))  
        }

        handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          this.setState({open: false});
        };

    render(){
        return(
            <div className='viewproduct'>
        <SearchTool sortby='Price' sortid='price' sortname='productname' sort={this.sort} onSet={this.setSearchText}/>
      <div className="cardProduct" style={{left: "0px", position: "relative", width:"100%", marginTop:"3vw", borderBottom:"1px solid darkorange"}}>
        <div className='row card-group' style={{ minWidth: '60px', position:"relative", width:"100%", margin:"0px"}}>
          {this.state.rows.map(row =>
            <div id="card" className='text-center col-xs-12 col-sm-6 col-md-4 col-lg-4' style={{position:"relative", color:'darkorange'}} key={row.productid}>
                <img style={{width:"19.9vw", height:'13.6vw'}} src={row.image} className='card-img-top' alt={row.productname}/>
                <div className='card-body' style={{padding:"5%"}}>
                  <p style={{minHeight:"5.25vw", maxHeight:"5.25vw" ,fontSize:"1.7vw", margin:"0px"}} className='card-title'>{row.productname}</p>
                  <p style={{minHeight:"3.5vw", maxHeight:"3.5vw" ,fontSize:"1vw"}} className='card-text'>{row.info}</p>
                </div>
                <div className='card-footer' style={{padding:"5%"}}>
                {(row.promotionprice !== row.price) 
                  ? <p style={{fontSize:"1.7vw", margin:"0px", textDecoration:"line-through"}} className=' card-text'>{row.price} VND<span className="badge badge-danger">-{100-row.promotionprice*100/row.price}%</span></p>
                  : <p style={{fontSize:"1.7vw", margin:"0px"}} className=' card-text'>{row.price} VND</p>
                }
                {(row.promotionprice !== row.price) 
                ? <p style={{fontSize:"1.7vw", margin:"0px"}} className=' card-text'>{row.promotionprice} VND</p> 
                : <p style={{fontSize:"1.7vw", margin:"0px", visibility:"hidden"}} className=' card-text'>{row.promotionprice} VND</p> 
                }
                  <button className='btn btn-warning' style={{width:'18vw', height:"2.7vw", fontSize:"1.1vw"}} onClick={()=>{this.setState({open: true}); return this.props.dispatch(addtocart(row))}}>Buy</button>
                </div>
            </div>
            )}
        </div>  
      </div> 
          <Snackbar
            
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <MySnackbarContentWrapper
            style={{background:"green", padding:"1vw"}}
              onClose={this.handleClose}
              variant="success"
              message="Thêm giỏ hàng thành công"
            />
          </Snackbar>
          <NextPrev limit={this.state.rows.length  !== 9} next={this.next} prev={this.prev} dis={this.i<=0}/>
      </div>
        )
    }
}

export default connect()(ProductShow)