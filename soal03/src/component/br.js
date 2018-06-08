import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

class br extends Component {

  state = {
    input:null,
    repos:null,
    data:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ data:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value*14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {
      const{data} = this.state;
      
     return (

        <div>
          <Nav/>
          <br/>
          <h3>Kurs BTC ke Rp </h3>
            
          <br/>
          <input value = {data} type="number" onInput={this.onSeriesInputChange}/>
          <br/>
          { this.state.data ? <p>BTC {data} &nbsp; Rp {this.state.hasil}</p> :
          <div>
           <br/> 
          </div>
           }

        </div>
        );
       }
     }
    

export default br;
