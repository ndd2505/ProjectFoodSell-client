import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import { Provider } from "react-redux"

const setcart = (state=[], action) =>{
    switch (action.type){
        case "add":
            if(state.length === 0){
                return Object.assign([], state, state.push({...action.cartitem, quantity: 1}))
            }else{
            if(state.filter((item)=> {return item.productid === action.cartitem.productid}).length === 0){
                return Object.assign([], state, state.push({...action.cartitem, quantity: 1}))
            }else{
                let index = state.indexOf(state.find((item)=>{return item.productid === action.cartitem.productid}))
                let arr = Object.assign([],state)
                arr[index].quantity += 1
                return arr
            }
        }
        case "-quantity":
                let index = state.indexOf(state.find((item)=>{return item.productid === action.cartitem.productid}))
                let arr = Object.assign([],state)
                arr[index].quantity -= 1
                return arr
        case "remove":
            return state.filter((item) => item.productid !== action.cartitem.productid)
        case "clear":
            let clearArr = []
            return clearArr
        default: return state
    }
}

const cartstore = createStore(setcart)

ReactDOM.render(<Provider store={cartstore}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
