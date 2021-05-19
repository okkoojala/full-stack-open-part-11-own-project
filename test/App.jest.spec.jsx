import React from 'react'
import { render } from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'
import { Provider } from 'react-redux'
import store from '../src/store'

jest.mock('axios')

describe('<App />', () => {

  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce(
      [
        {
          content: 'An anecdote',
          id: 1,
          votes: 25
        }
      ]
    )
    await act(async () => {
      render(<Provider store={store}>
        <App />
      </Provider>)
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith('/anecdotes')
  })

  it('shows Heading', async () => {
    axiosMock.get.mockResolvedValueOnce({})
    await act(async () => {
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>)
      expect(getByText('Anecdotes')).toBeVisible()
    })
  })
})
