context('Login to Dicoding', () => {
  beforeEach(() => {
    cy.visit('https://www.dicoding.com/login')
  })

  it('Login to Dicoding account', () => {
    /// find email input by name
    cy.get('input[name="login_email"]').type('colourer_cracknel@aleeas.com')

    // /// find password input by name
    cy.get('input[name="login_password"]').type('!1234567890)')

    // /// find submit button by name
    cy.get('button[type="submit"]').click()

    // /// expect this site to redirect to stackoverflow
    // cy.url().should('include', 'stackoverflow.com')

  })
})