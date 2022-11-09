context('Generate MD 5', () => {
  beforeEach(() => {
    cy.visit('https://md5decrypt.net/en/')
  })

  it('Create MD 5 Code', () => {
    /// find text area by name
    cy.get('textarea[name="hash"]').type('Hello World, ini testing kelompok satu mata kuliah Pengujian Perangkat Lunak')

    /// find submit button by contains "Encrypt"
    cy.contains('Encrypt').click()

    /// expect the site to redirect
    cy.url().should('include', 'md5decrypt.net')

    /// expect the result with fieldset with id answer is visible and not empty
    cy.get('#answer').should('be.visible').and('not.be.empty')


  })
})