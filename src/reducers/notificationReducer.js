const initialState = { title:'App init', delay:5 }

const notificationReducer = (state = initialState, action) => {

  switch (action.type){
  case 'CHANGE':
  {
    let newState = { title:action.data.title, delay:action.data.delay }
    return newState
  }
  default:
    return state
  }
}

export const setNotification = (content,delay) => {
  return async dispatch => {
    return dispatch({ type:'CHANGE', data:{ title:content, delay:delay } })
  }
}

export default notificationReducer