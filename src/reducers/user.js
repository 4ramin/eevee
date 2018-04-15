const init = {
  has_logged_in: false,
}
const user = (state = init, action) => {
  switch (action.type) {
    case 'SETUSER':
      return Object.assign(action.user, { has_logged_in: true })
    case 'LOGIN':
      return [
        ...state,
        user,
      ]
    default:
      return state
  }
}

export default user
