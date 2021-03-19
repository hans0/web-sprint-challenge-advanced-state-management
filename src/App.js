import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {
  // constructor(props) {
    // super(props)
  //   // useEffect(()=> {
  //     fetchSmurfs();
  //   // }, []);
  // }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
export default connect((state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  }
}, {})(App);

//Task List: