
context('Registering new account to Facebook', () => {
  beforeEach(() => {
    cy.visit('https://facebook.com')
  })

  it('Register for facebook account', () => {
   
    cy.contains('Buat Akun Baru').click()

    /// scroll to the top of the page
    cy.scrollTo('top')

    /// expect to show modal will be visible for at least 10 seconds
    cy.get('#reg_box').should('be.visible', { timeout: 10000 })

    /// find first name input by name
    cy.get('input[name="firstname"]').type('Basilois')

    /// find last name input by name
    cy.get('input[name="lastname"]').type('Hunne')

    /// find email input by name
    cy.get('input[name="reg_email__"]').type('smazes_evitting@aleeas.com')

    /// expect retype email input to be visible
    cy.get('input[name="reg_email_confirmation__"]').should('be.visible')

    /// find retype email input by name
    cy.get('input[name="reg_email_confirmation__"]').type('smazes_evitting@aleeas.com')

    /// find password input by name    
    cy.get('input[name="reg_passwd__"]').clear().type('#12amkIaikam')


    /// find birthday day select by name
    cy.get('select[name="birthday_day"]').select('1')

    /// find birthday month select by name
    cy.get('select[name="birthday_month"]').select('Jan')

    /// find birthday year select by name
    cy.get('select[name="birthday_year"]').select('1990')

    /// find radio button by value
    cy.get('input[value="1"]').check()

    /// find submit button by name
    cy.get('button[name="websubmit"]').click()

    /// expect this site to redirect to facebook checkpoint
    cy.url().should('include', 'checkpoint')
  })
})