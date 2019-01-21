import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState( {robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render(){
    const { robots, searchfield } = this.state;//destructuring
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !robots.length ?
        <h1>Loading...</h1> :
   (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>  
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
        </div>
     )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);//connect is a higher order function (a function that returns another function)