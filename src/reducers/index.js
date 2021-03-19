import {
  SMURF_FETCH_START, 
  // SMURF_FETCH_SUCCESS, 
  // SMURF_FETCH_FAILURE,
  // SMURF_ADD, 
  // SMURF_ERROR,
} from '../actions';


// Task List:
// 1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: ""
}


//2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action) => {
  switch(action.type){
    // 3. Add in a reducer case to accomidate the start of a smurf fetch.

    case SMURF_FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    // 4. Add in a reducer case to accomidate the successful smurf api fetch.
    // case SMURF_FETCH_SUCCESS:
    //   return {
    //     ...state
    //   };
    
    // 5. Add in a reducer cases to accomidate the failed smurf api fetch.
    // case SMURF_FETCH_FAILURE:
    //   return {
    //     ...state
    //   };
    // // 6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
    // case SMURF_ADD:
    //   return {
    //     ...state
    //   };
    // // 7. Add in a reducer case that adds in a value to the error message.
    // case SMURF_ERROR:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}

export default reducer;

