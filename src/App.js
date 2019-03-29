import React, { Component } from 'react';

import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Login from './components/Login/login.component';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
        
        <div className="row">
          <div className="col col-md-4 offset-md-4">
            <Login />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
