describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://rot13.com/')
    })
  
    it('ROT Decyrpt', () => {
      cy.get('[id="input"]')
      .type('Gur dhvpx oebja sbk whzcf bire 13 ynml qbtf.')
    })  
})