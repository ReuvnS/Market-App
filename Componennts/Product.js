import React, { Component } from 'react';
import plus from '.././images/plus.png';



export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            index: props.index
        }
    }

   
    render() {
        return (
            <div style={{border:'3px solid green',margin:'4px 4px'}}>
                <p  style={{margin:'10px',display:'inline-block'}}><b>{this.props.name}</b> : </p>
                <p  style={{margin:'10px',display:'inline-block'}}>Price = {this.props.price} <small>NIS</small></p><br/>
                <button style={{background:'white'}}title="Add To Cart"  style={{margin:'10px',display:'inline-block'}}
                 onClick={()=>{this.props.cart(this.props.name,this.props.price)}}>
                  <img style={{width:'20px',height:'20px'}} src={plus} alt='plus'/>
                </button>
            </div>
        )
    }
}
