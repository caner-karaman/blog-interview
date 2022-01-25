/// <reference types="cypress" />

describe('pagination', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('check page number changing', () => {
    cy.get('[data-cy="displayPage"]').should(($div) => {
      const text = $div.text();
      expect(text).to.match(/1/);
    })
    
    cy.get('[data-testid="nextButton"]').click()
    cy.get('[data-cy="displayPage"]').should(($div) => {
      const text = $div.text();
      expect(text).to.match(/2/);
    })

    cy.get('[data-testid="prevButton"]').click()
    cy.get('[data-cy="displayPage"]').should(($div) => {
      const text = $div.text();
      expect(text).to.match(/1/);
    })
  })
})