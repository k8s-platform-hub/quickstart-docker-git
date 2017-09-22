import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home';

const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
      </div>
    </Router>
)
export default BasicExample
