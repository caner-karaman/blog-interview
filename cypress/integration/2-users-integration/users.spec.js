/// <reference types="cypress" />

describe('users', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('check after click user display the user`s blogs', () => {
    const lastUser = cy.get('[data-cy="user"]').last()
    lastUser.click();
    cy.get('[data-cy="blogItemUser"]').first().should('have.text', 'Clementina DuBuque');
  })
  it('check after search user display the user list correctly', () => {
    const serchInput = cy.get('aside input');
    serchInput.type('a')
    cy.get('[data-cy="user"]').should(($user) => {
      const text = $user.text()
    
      expect(text).to.match(/a/)
    })
  })
})