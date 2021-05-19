describe('Anecdote voting', function() {
  it('Single anecdote item can be upvoted', function() {
    cy.visit('http://localhost:5000')
    cy.get('.anecdote:first-child .voteCount').invoke('text').then((voteCountText) => {
      const votes = parseInt(voteCountText)
      cy.log(votes)
      cy.get('.anecdote:first-child button').click().then(() => {
        cy.get('.anecdote:first-child .voteCount').invoke('text').then((newVoteCountText) => {
          const updatedVotes = parseInt(newVoteCountText)
          cy.log(updatedVotes)
          expect(updatedVotes).not.equal(votes)
        })
      })
    })
  })
})
