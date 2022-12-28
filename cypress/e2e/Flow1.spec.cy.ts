// ==== End-to-End Flow Testing ====

describe('Flow 1 application', () => {
  const baseUrl = "localhost:4200";
  it('visits post-list page & starts verification', () => {
    cy.visit(baseUrl);
    cy.wait(300);

    // checks if the home page is navigated to post-list page
    cy.url().then(($url) => {
      expect($url).include("/shelfList")
    })

    cy.get('.shelf-list-table')
      .should('be.visible')

    // checks if application name is shown correctly on the navbar
    cy.get('.navbar-brand')
      .should('be.visible')
      .should('have.text', 'CRUDAPP')

    // verifies create post button on navbar and clicks on it
    cy.get('.create-shelf-button')
      .should('be.visible')
      .trigger('mouseover')
      .should('have.css', 'cursor', 'pointer')
      .click()

    // verifies if the app is navigated to create post route
    cy.url().then(($url) => {
      expect($url).include("/createShelf")
    })

    // navigating back to post list
    cy.get('.shelf-list-tab')
      .should('be.visible')
      .trigger('mouseover')
      .click()
  })
})