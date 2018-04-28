const noties = (state = [], action) => {
  switch (action.type) {
    case 'SETNOTIES':
      console.log(action.noties)
      return action.noties
    case 'APPEND':
      return [
        ...state,
        noties,
      ]
    default:
      return state
  }
}

export default noties
