describe('Posts CRUD', () => {
  beforeEach(() => {
    cy.login('testuser', 'password123'); // Custom Cypress command
  });

  it('creates a new post', () => {
    cy.visit('/posts/new');
    cy.get('input[name=title]').type('Cypress Post');
    cy.get('textarea[name=content]').type('Content of Cypress Post');
    cy.get('button[type=submit]').click();
    cy.contains('Cypress Post');
  });

  it('edits an existing post', () => {
    cy.visit('/posts');
    cy.contains('Cypress Post').click();
    cy.get('button.edit').click();
    cy.get('input[name=title]').clear().type('Updated Post');
    cy.get('button[type=submit]').click();
    cy.contains('Updated Post');
  });

  it('deletes a post', () => {
    cy.visit('/posts');
    cy.contains('Updated Post').parent().find('button.delete').click();
    cy.contains('Updated Post').should('not.exist');
  });
});
