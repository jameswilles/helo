import React, { Component } from 'react';

//import components
import Nav from './Components/Nav/Nav';
import routes from './routes';
import './App.css';

class App extends Component {
  // componentDidMount(){
  //   console.log(this.props)
  // }

  render() {
    return(
      <div className='App'>
        <Nav />
        { routes }
      </div>
    )
  }
}

export default App;
