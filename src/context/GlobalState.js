import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    intakes: []
}


//Creates context
export const GlobalContext = createContext(initialState);


//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteIntake(id) {
    dispatch({
      type: 'DELETE_INTAKE',
      payload: id
    });
  }

  function addIntake(intake) {
    dispatch({
      type: 'ADD_INTAKE',
      payload: intake
    });
  }

  return (<GlobalContext.Provider value={{
    intakes: state.intakes,
    deleteIntake,
    addIntake
  }}>
    {children}
  </GlobalContext.Provider>);
}