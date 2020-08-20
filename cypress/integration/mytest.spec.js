describe("Sample test", () => {
  it("Search lollipop emoji", () => {
    cy.visit("http://localhost:3000/"); // launch project website
    cy.get("input").type("lollipop"); // enter 'lollipop' in search
    cy.get(".component-emoji-result-row").should("have.length", 1); // check if only 1 result is returned
    cy.contains("Lollipop").should("have.class", "title"); // check if returned element contains 'title' class
  });
});
