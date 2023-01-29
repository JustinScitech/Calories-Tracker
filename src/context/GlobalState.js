import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    intake: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteIntake(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addIntake(intake) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: intake
    });
  }

  return (<GlobalContext.Provider value={{
    intake: state.intake,
    deleteIntake,
    addIntake
  }}>
    {children}
  </GlobalContext.Provider>);
}