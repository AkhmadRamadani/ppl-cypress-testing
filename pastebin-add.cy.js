context('Create Pastebin Data', () => {
    beforeEach(() => {
      cy.visit('https://pastebin.com/')
    })
  
    it('Create pastebin data', () => {
      /// find paste code input by name
        cy.get('textarea[name="PostForm[text]"]').type('Hello World, ini testing kelompok satu mata kuliah Pengujian Perangkat Lunak')

        /// find paste name input by name
        cy.get('input[name="PostForm[name]"]').type('Testing Kelompok Satu')

        /// find submit button by contains "Create New Paste"
        cy.contains('Create New Paste').click()

        /// expect this site to redirect to pastebin
        cy.url().should('include', 'pastebin.com')


  
    })
  })