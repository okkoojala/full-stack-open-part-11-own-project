import anecdoteService from '../services/anecdoteService'

import { setNotification } from './notificationReducer'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {

  switch (action.type){
  case 'VOTE':
  {
    const obj = state.map((i) => {
      if(i.id === action.data.id)
      {
        let updated = Object.assign({}, i)
        updated.votes++
        return updated
      }
      return i
    })
    return [...obj]
  }
  case 'ADD':
  {
    const newObj = action.data
    const newState = [...state,newObj]
    return newState
  }
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return state
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    await anecdoteService.addVote(anecdote)
    dispatch({ type:'VOTE', data:{ id:anecdote.id } })
    dispatch(setNotification(`You voted: ${anecdote.content}`,5))
  }
}

export const addNew = (content) => {
  return async dispatch => {
    let newAnecdote = await anecdoteService.createNew({
      content:content
      ,votes:0
    })
    console.log(newAnecdote,content)
    dispatch({ type:'ADD', data:newAnecdote })
    dispatch(setNotification('New anecdote',5))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch =>
  {
    try{
      let anecdotes = await anecdoteService.getAll()
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdotes,
      })
    }
    catch(e)
    {
      console.log(e)
    }
  }
}

export default anecdoteReducer