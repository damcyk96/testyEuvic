/// <reference types="Cypress" />

const basicPage = "https://brave-benz-5b19c8.netlify.app/";

describe("Czy strona basic poprawnie sie laduja w ogole", () => {
  it("should open basicPage", () => {
    cy.visit(basicPage);
  });
});

describe("Czy strona basic wyszukuje poprawnie szeregowca ryana", () => {
  it("should open basicPage", () => {
    cy.visit(basicPage);
  });
  it("should type saving private ryan in search input", () => {
    cy.get(".sc-jzJRlG").type("saving private ryan{enter}");
  });
  it("should have a saving private ryan as search result", () => {
    cy.get(".sc-bxivhb > .sc-bwzfXH > :nth-child(1) > .sc-bdVaJa").contains(
      "saving private ryan"
    );
  });
});

describe("Czy poprawnie renderuje", () => {
  it("should open basicPage", () => {
    cy.visit(basicPage);
  });
});
