const initialState = ''

const filterReducer = (state = initialState, action) => {

  switch (action.type){
  case 'SET':
  {
    let newState = action.data.toString()
    return newState
  }
  default:
    return state
  }
}

export const setFilter = (content) => {
  return { type:'SET', data:content }
}

export default filterReducer