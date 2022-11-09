context('Search Wikipedia Content', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
  })

  it('Searching content in Wikipedia\'s site', () => {
    /// find search input by name
    cy.get('input[name="search"]').type('Human')

    /// find submit button by name
    cy.get('button[type="submit"]').click()

    /// expect this site to redirect to wikipedia search result
    cy.url().should('include', 'wikipedia.org')


  })
})