import React, { Component } from 'react';
import Nav from './Nav';
import axios from 'axios';

class rb extends Component {

  state = {
    input:null,
    repos: null,
    seriesName:null,
  }
    

  onSeriesInputChange = e =>{
    this.setState({ seriesName:e.target.value});
    axios.get(`https://blockchain.info/tobtc?currency=USD&value=${e.target.value/14000}`)
    .then((ambilData) => {  
      console.log(ambilData);
      this.setState({
        hasil: ambilData.data,
        })
        
     })
  }
    
    render() {

      const{seriesName} = this.state;

     return (

        <div>
          <Nav/>

          <br/>
          <h3>Kurs Rupiah ke Bitcoin </h3>
            
          <br/>
          <input value = {seriesName} type="number" onInput={this.onSeriesInputChange}/>
          <br/>
          { this.state.seriesName ? <h6>Rp {seriesName} &nbsp; BTC {this.state.hasil}</h6> :
          <div>
          <br/> 
          </div>}

        

        </div>
        );
       }
     }
    

export default rb;
