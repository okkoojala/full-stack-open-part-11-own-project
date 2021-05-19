import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const sortByVotes = (a,b) => {
    return b.votes - a.votes
  }

  return(
    <div>
      {
        anecdotes.sort(sortByVotes).filter((a) => {
          return a.content.toLowerCase().includes(filter.toLowerCase())
        }).map(anecdote =>
          <div key={anecdote.id} className={'anecdote'}>
            <div>
              {anecdote.content}
            </div>
            <div>
          has <span className='voteCount'>{anecdote.votes}</span>
              <button onClick={() => {
                dispatch(vote(anecdote))
              }}>vote</button>
            </div>
          </div>
        )

      }
    </div>
  )
}

export default AnecdoteList