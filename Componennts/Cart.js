import React, { Component } from 'react'
import minus from '.././images/minus.png'


export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: props.index
        }
    }

    render() {
        return (
            <div style={{border:'3px solid green',margin:'4px 4px'}}>
                <p  style={{margin:'10px',display:'inline-block'}}><b>{this.props.name}</b> :</p>
                <p  style={{margin:'10px',display:'inline-block'}}>Price = {this.props.price} <small>NIS</small></p>
                <p  style={{margin:'10px',display:'inline-block'}}>Amount = {this.props.amount}</p><br/>
                <button style={{background:'white',display:'inline-block'}} title="Delete From Cart" style={{margin:'10px'}}
                 onClick={()=>{this.props.delete(this.props.name)}}>
                     <img style={{width:'20px',height:'20px'}} src={minus} alt="minus"/>
                </button>
            </div>
            
        )
    }
}