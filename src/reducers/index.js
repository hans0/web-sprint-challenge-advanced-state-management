import { 
  ADD_SMURF, 
  FETCH_SMURFS_LOADING, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAIL,
  SET_ERROR 
} from '../actions';
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
  smurfs: [], 
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case(FETCH_SMURFS_LOADING):
      return({
        ...state,
        isLoading: true
      });
    case(FETCH_SMURFS_SUCCESS):
      return({
        ...state,
        smurfs: action.payload,
        isLoading: false
      });
    case(FETCH_SMURFS_FAIL):
      return({
        ...state,
        error: action.payload,
        isLoading: false
      })
    case(ADD_SMURF):
      return ({
        ...state,
        smurfs: [
          ...state.smurfs,
          action.payload
        ]

      });
    default:
      return state;
  }
}

export default reducer;


//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.