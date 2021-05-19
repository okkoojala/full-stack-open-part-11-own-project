import axios from 'axios'
const baseUrl = '/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = content
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addVote = async (anecdote) => {
  const object = Object.assign({ ...anecdote },null)
  object.votes++
  const response = await axios.put(`${baseUrl}/${object.id}`, object)
  return response.data
}

export default {
  getAll,
  createNew,
  addVote
}