describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to display a title', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });

  it('is expected to display a search button ', () => {
    cy.get("[data-cy=searchBtn").should("contain", "Search")
  });

});