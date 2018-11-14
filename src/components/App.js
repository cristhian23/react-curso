import React, { Component } from 'react';

import Header from '../Global/header'
import Footer from '../Global/footer'
import Content from '../Global/content'
import items from '../data/menu'

class App extends Component {


  render() {
    const {children} = this.props;
    return (
      <div className="App">
       <Header title ="Memorias" items = {items}/>
       <Content body={children}/>
       <Footer copy="Copyright - All Rights Reserved"/>
      </div>
    );  
  }
}

export default App;
