import React, { Component } from 'react';
import 'normalize.css';
import 'flexboxgrid2';
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main /> 
         <Footer />  
      </div>
    );
  }
}

export default App;
