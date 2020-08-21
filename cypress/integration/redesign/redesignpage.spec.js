/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";

describe("Czy strona redesign poprawnie sie laduja w ogole", () => {
  it("should open redesignPage", () => {
    cy.visit(redesignPage);
  });
});

// describe("Czy nawigacja i menu poprawnie działa", () => {
//   it("should open redesignPage", () => {
//     cy.visit(redesignPage);
//   });
//   it("should check nav", () => {
//     cy.get('[href="/register"] > .menu-item').should("contain", "Sign Up");
//     cy.get('[href="/login"] > .menu-item').should("contain", "Login");
//     cy.get(".ham").click();
//     cy.get('[aria-current="page"] > li > .menu-item').should("contain", "Home");
//     cy.get('[href="/movie"] > li > .menu-item').should("contain", "Movies");
//     cy.get('[href="/tv"] > li > .menu-item').should("contain", "TV-Shows");
//     cy.get('[href="/search"] > li > .menu-item').should("contain", "Search");
//     cy.get('[href="/login"] > li > .menu-item').should("contain", "Login");
//     cy.get('[href="/register"] > li > .menu-item').should("contain", "Sign Up");
//   });
// });

describe("Czy menu otwiera się poprawnie, renderuje i zamyka", () => {
  it("should open redesignPage", () => {
    cy.visit(redesignPage);
  });
  it("should open menu, check and close", () => {
    cy.get(".ham").click();
    cy.wait(500);
    cy.get(".ham").click();
  });
});

describe("Czy podpowiedzi działają poprawnie", () => {
  it("should open basicPage", () => {
    cy.visit(redesignPage);
  });
  it("should type saving private ryan in search input", () => {
    cy.get(".search-input").type("saving private ryan");
  });
  it("should be visible saving private ryan in suggestions", () => {
    cy.get(".result").should("contain", "Saving Private Ryan");
  });
});

describe("Czy wyszukiwanie działa poprawnie", () => {
  it("should open basicPage", () => {
    cy.visit(redesignPage);
  });
  it("should type saving private ryan in search input", () => {
    cy.get(".search-input").type("saving private ryan");
  });
  it("should be visible saving private ryan in suggestions", () => {
    cy.get(".result").should("contain", "Saving Private Ryan");
  });
});
