import axios from 'axios';

export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
// export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE';
// export const SMURF_ADD = 'SMURF_ADD';
// export const SMURF_ERROR = 'SMURF_ERROR';


// Task List:
// 1. Add a thunk action called fetchSmurfs that 
export const fetchSmurfs = () => {
  return (dispatch) => {
    // triggers a loading status display in our application, 
    dispatch({type: SMURF_FETCH_START});
    // performs an axios call to retreive smurfs from our server, 
    axios.get(`http://localhost:3333/smurfs`)
      .then((res) => {
        console.log('GETTING SMURFS:', res);
        dispatch({type: SMURF_FETCH_SUCCESS, payload: res.data})    
      })
      .catch((err) => {
        console.log(err);
      })
  // saves the result of that call to our state 
  // and shows an error if one is made.

  }
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

//3. Add a standard action that allows us to set the value of the error message slice of state.