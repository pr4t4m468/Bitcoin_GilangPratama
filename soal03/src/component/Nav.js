import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class nav extends Component {
    
    render() {
     return (
        <div>
          <center>
          <div className="tabmenu">

          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link" data-toggle="" to="/" role="tab" aria-controls="home" aria-selected="true">
              Kurs BTC Hari Ini</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rb" role="tab" aria-controls="profile" aria-selected="false">
              Konversi Rp ke BTC</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/br" role="tab" aria-controls="profile" aria-selected="false"> Konversi BTC ke Rp</Link>
            </li>
          </ul>
          </div>

           </center>
        </div>
        );
       }
     }
    

export default nav;
