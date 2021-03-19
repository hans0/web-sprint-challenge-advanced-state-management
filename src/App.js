import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {
  componentDidMount() {
    const { fetchSmurfs } = this.props;
    fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList fetchSmurfs={ fetchSmurfs }/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
  }
}
//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
export default connect(mapStateToProps, { fetchSmurfs })(App);