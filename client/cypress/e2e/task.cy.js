describe("Task Manager E2E", () => {
  it("Loads the homepage", () => {
    cy.visit("http://localhost:5173");
    cy.contains("MERN Task Manager");
  });
});
