// ==== End-to-End Flow Testing ====

describe('Flow 1 application', () => {
  const baseUrl = "localhost:4200";
  it('visits post-list page & starts verification', () => {
    cy.visit(baseUrl);
    cy.wait(300);

    // checks if the home page is navigated to post-list page
    cy.url().then(($url) => {
      expect($url).include("/postList")
    })

    cy.get('.post-list')
      .should('be.visible')

    // checks if application name is shown correctly on the navbar
    cy.get('.navbar-brand')
      .should('be.visible')
      .should('have.text', 'ApplicationNgRX')

    // verifies create post button on navbar and clicks on it
    cy.get('.create-post-link')
      .should('be.visible')
      .trigger('mouseover')
      .should('have.css', 'cursor', 'pointer')
      .click()

    // verifies if the app is navigated to create post route
    cy.url().then(($url) => {
      expect($url).include("/createPost")
    })

    // navigating back to post list
    cy.get('.posts-link')
      .should('be.visible')
      .trigger('mouseover')
      .click()
  })
})