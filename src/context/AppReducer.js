const appReducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_INTAKE':
      return {
        ...state,
        intakes: state.intakes.filter(intake => intake.id !== action.payload)
      }
    case 'ADD_INTAKE':
      return {
        ...state,
        intakes: [action.payload, ...state.intakes]
      }
    default:
      return state;
  }
}

export default appReducer;