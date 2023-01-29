export default (state, action) => {
    switch(action.type) {
      case 'DELETE_INTAKE':
        return {
          ...state,
          intake: state.intake.filter(intake => intake.id !== action.payload)
        }
      case 'ADD_INTAKE':
        return {
          ...state,
          intake: [action.payload, ...state.intake]
        }
      default:
        return state;
    }
  }