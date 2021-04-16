import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const fetchSmurfs = () => {
  console.log('fetchSmurfs called')
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_LOADING});
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) => {
        console.log(res);
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAIL, payload: err})
      })
  }
}
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurf) => {
  return dispatch => {
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then((res) => {
        console.log(res);
        dispatch({type: ADD_SMURF, payload: smurf});
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAIL, payload: err})
      });
  }
}

//3. Add a standard action that allows us to set the value of the error message slice of state.
export const SET_ERROR = "SET_ERROR";
export const setError = (error) => {
  return {type: SET_ERROR, payload: error};
}