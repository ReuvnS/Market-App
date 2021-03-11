import './App.css';
import React from 'react';
import Product from './Componennts/Product';
import Cart from './Componennts/Cart'
import home from './images/home.png';
import cart from './images/cart.png';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'Milk', price: 7 },
        { name: 'Bread', price: 10 },
        { name: 'Rice', price: 25 },
        {name: 'Beer', price: 12},
        { name: 'Cheese', price: 17 }
      ],
      goToCart: false,
      goHome: false,
      sum: 0,
      cart: [
        {
          name: 'Milk',
          price: 0, amount: 0
        },
        {
          name: 'Bread',
          price: 0, amount: 0
        },
        {
          name: 'Rice',
          price: 0, amount: 0
        },
        {
          name: 'Beer',
          price: 0, amount: 0
        },
        {
          name: 'Cheese',
          price: 0, amount: 0
        }
      ]
    };
    this.goToCart = this.goToCart.bind(this);
    this.goHome = this.goHome.bind(this);

  }

  style = {
    backgroundColor:'blue',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }

  goToCart() {
    this.setState({
      goToCart: !this.state.goToCart,
    });
  }
  goHome() {
    this.setState({
      goHome: !this.state.goHome,
    });
  }

  addTocart = (n, p) => {
    
    let newCart = [...this.state.cart];
    if (n === 'Milk') {
      let item = { ...newCart[0] };
      item.price = item.price + p;
      item.amount = item.amount + 1;
      newCart[0] = item;
    }
    else if (n === 'Bread') {
      let item = { ...newCart[1] };
      item.price = item.price + p;
      item.amount = item.amount + 1;
      newCart[1] = item;
    }
    else if (n === 'Rice'){
      let item = { ...newCart[2] };
      item.price = item.price + p;
      item.amount = item.amount + 1;
      newCart[2] = item;
    }
    else if (n === 'Beer'){
      let item = { ...newCart[3] };
      item.price = item.price + p;
      item.amount = item.amount + 1;
      newCart[3] = item;
    }else{
      let item = { ...newCart[4] };
      item.price = item.price + p;
      item.amount = item.amount + 1;
      newCart[4] = item;
    }
    this.setState({
      cart: newCart
    })
    let sum = this.state.sum
    sum = newCart[0].price + newCart[1].price + newCart[2].price+newCart[3].price+newCart[4].price
    this.setState({
      sum: sum
    })
  }

  deleteFromCart = (n) => {
    let newCart = [...this.state.cart];
    if (n === 'Milk') {
      let item = { ...newCart[0] };
      item.price = item.price - 7;
      if (item.amount === 0) {
        return null;
      }
      else {
        item.amount = item.amount - 1;
      }
      newCart[0] = item;
    }
    else if (n === 'Bread') {
      let item = { ...newCart[1] };
      item.price = item.price - 10;
      if (item.amount === 0) {
        return null;
      }
      else {
        item.amount = item.amount - 1;
      }
      newCart[1] = item;
    }
    else if(n === 'Rice') {
      let item = { ...newCart[2] };
      item.price = item.price - 25;
      if (item.amount === 0) {
        return null;
      }
      else {
        item.amount = item.amount - 1;
      }
      newCart[2] = item;
    }else if(n === 'Beer')
    {let item = { ...newCart[3] };
    item.price = item.price - 12;
    if (item.amount === 0) {
      return null;
    }
    else {
      item.amount = item.amount - 1;
    }
    newCart[3] = item;
  }else{let item = { ...newCart[4] };
  item.price = item.price - 17;
  if (item.amount === 0) {
    return null;
  }
  else {
    item.amount = item.amount - 1;
  }
  newCart[4] = item;

  }
    this.setState({
      cart: newCart
    })
    let sum = this.state.sum
    sum = newCart[0].price + newCart[1].price + newCart[2].price+newCart[3].price+newCart[4].price
    this.setState({
      sum: sum
    })
  }

  emptyCart = () => {
    let newCart = [...this.state.cart];
    let item1 = { ...newCart[0] };
    let item2 = { ...newCart[1] };
    let item3 = { ...newCart[2] };
    let item4 = { ...newCart[3] };
    let item5 = { ...newCart[4] };
    if (item1.amount === 0 && item2.amount === 0 && item3.amount === 0 && item4.amount === 0 && item5.amount === 0) {
      alert('No items in cart');
    }
    else {
      item1.price = 0;
      item1.amount = 0;
      newCart[0] = item1;
      item2.price = 0;
      item2.amount = 0;
      newCart[1] = item2;
      item3.price = 0;
      item3.amount = 0;
      newCart[2] = item3;
      item4.price = 0;
      item4.amount = 0;
      newCart[3] = item4;
      item5.price = 0;
      item5.amount = 0;
      newCart[4] = item4;
      this.setState({
        cart: newCart
      })
      let sum = this.state.sum
      sum = 0;
      this.setState({
        sum: sum
      })
      alert('Thank for buying from as :)');
    }

  }

  render() {
    return (
      <div style={this.style} style={{backgroundColor:'blue'}}> {(this.state.goToCart && this.state.goHome === false) || (this.state.goHome && this.state.goToCart === false) ?
        <div className="App">
          <button style={{background:'white'}}className="alignleft" title="Go Home" onClick={this.goHome}><img style={{width:'40px',height:'30px'}} src={home} alt="Go home"/></button>
          <h1 className="inline" style={{ marginRight: '10px', marginLeft: '-40px',fontSize:'60px',fontFamily:'fantasy' }}>Cart&nbsp;</h1>
          
          {this.state.cart.map((element, i) => {
            return <Cart delete={this.deleteFromCart} name={element.name} price={element.price} amount={element.amount} index={i} />
          })}<br/>
          <p className="inline" style={{ marginRight: '30px' }}><b>Total = {this.state.sum} <small>NIS</small></b></p><br/>
          <button onClick={this.emptyCart} id='buyBtn'><b>Buy</b></button><br />
          
        </div>
        :
        <div className="App">
          <button style={{margin:'4px 4px',background:'white'}} className="alignleft"  title="Go Home"  ><img style={{width:'40px',height:'30px'}} src={home} alt='home' /></button>
          <h1 className="inline" id="reu">Reuvn market</h1>
          <button style={{margin:'4px 4px',background:'white'}} className="alignright" title="Go To Cart" onClick={this.goToCart}><img style={{width:'40px',height:'30px'}} src={cart} alt='cart'/></button>
          {this.state.products.map((element, i) => {
            return <Product cart={this.addTocart} name={element.name} price={element.price} index={i} />
          })}
          <br />
          
        </div>
      }</div>

    );
  }
}
