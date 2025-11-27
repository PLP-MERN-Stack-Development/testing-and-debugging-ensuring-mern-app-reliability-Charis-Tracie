describe('Login Flow', () => {
  it('allows a user to login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name=username]').type('testuser');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.url().should('eq', 'http://localhost:3000/dashboard');
    cy.contains('Welcome, testuser');
  });
});
