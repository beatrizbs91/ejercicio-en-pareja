describe('herokuapp tests', () => {
  it('Form Authentication', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
    cy.get('#username').type('Beatriz')
    cy.get('#password').type('Briales')
    cy.get('.fa.fa-2x.fa-sign-in').click()
  })

   it('Shift content', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Shifting Content').click()
    cy.contains('Example 1: Menu Element').click()
    cy.get('ul li').should('have.length', 5)
  })
})














  it('Form Authentication', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
    cy.get('#username').type('Beatriz')
    cy.get('#password').type('Briales')
    cy.get('.fa.fa-2x.fa-sign-in').click()
  })