import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() { 
    this.props.onRequestRobots();
  }

  render(){
    const { searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
      return isPending ?
        <h1>Loading...</h1> :
   (
        <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange}/>
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