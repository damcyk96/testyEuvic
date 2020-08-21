/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";

describe("Czy strona redesign poprawnie sie laduja w ogole", () => {
  it("should open redesignPage", () => {
    cy.visit(redesignPage);
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
