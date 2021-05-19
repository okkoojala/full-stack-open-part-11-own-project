import React from 'react'
import { addNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect, useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewHandler = async(event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    try{
      dispatch(addNew(content))
      dispatch(setNotification('New anecdote',5))
    }
    catch(e)
    {
      console.log(e)
    }
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewHandler}>
        <div><input name={'anecdote'}/></div>
        <button>create</button>
      </form>
    </div>
  )
}

const ConnectedAnecdoteForm = connect()(AnecdoteForm)
export default ConnectedAnecdoteForm