/// <reference types="cypress" />

describe('render blog items correctly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('displays four blog item', () => {
    cy.get('[data-testId="blogItem"]').should('have.length', 4)
  })
})