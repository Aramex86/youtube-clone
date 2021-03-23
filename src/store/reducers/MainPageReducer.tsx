import {Dispatch} from 'react';
import {ThunkAction} from 'redux-thunk';
import { AppStateType } from '../store/Store';

const SEARCH_FIELD = 'mainpageReducer/SEARCH_FIELD';



const initialState = {
    srerachField:'',
    // searchResults: Array,
    // defaultVideoLenght:12


};

type initialStateType = typeof initialState;

// type ActionsTypes = 

// type DispatchType = Dispatch<ActionsTypes>;
// type ThunkType = ThunkAction<
//   Promise<void>,
//   AppStateType,
//   unknown,
//   ActionsTypes
// >;

const mainPageReducer = (
  state = initialState,
  action:any /* ActionsTypes */
): initialStateType => {
  switch (action.type) {
    case SEARCH_FIELD: {
      return {
        ...state,
        srerachField: action.searchField,
      };
    }
    default:
      return state;
  }
};


export default mainPageReducer;