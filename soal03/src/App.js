import React, { Component } from 'react';
import tabel from './component/tabel'
import rb from './component/rb'
import br from './component/br'

import { Route } from 'react-router-dom';


class App extends Component {
    
    render() {

     return (
        <div>
          <Route exact path="/" component={tabel}/>
          <Route path="/rb" component={rb}/>
          <Route path="/br" component={br}/>

        </div>
        );
       }
     }
    

export default App;
