/// <reference types="Cypress" />

const basicPage = "https://brave-benz-5b19c8.netlify.app/";
describe("Testuje strone glowna", () => {
  context("uruchomienie strony", () => {
    it("visit webpage", () => {
      cy.visit(basicPage);
    });
  });
});
beforeEach(() => {
  cy.viewport(1920, 1080);
});

context("testy", () => {
  describe("Czy strona redesign poprawnie sie laduja w ogole", () => {
    it("should open redesignPage", () => {
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
});
