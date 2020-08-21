/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";
const ryanSynopis =
  "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.";

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
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it("should open basicPage", () => {
    cy.visit(redesignPage);
  });
  it("should type saving private ryan in search input", () => {
    cy.get(".search-input").type("saving private ryan{enter}");
  });
  it("should be visible our search as title", () => {
    cy.get(".search-main-head").should("contain", "saving private ryan");
  });
  it("should be as first result", () => {
    cy.get(":nth-child(1) > .result-full-info > .color-blue").should(
      "contain",
      "Saving Private Ryan"
    );
  });
  it("should click a details for saving private ryan", () => {
    cy.get(":nth-child(1) > .remove > .watchlist").click();
  });
  it("should check title", () => {
    cy.get(".movie-main-info > .color-blue").should(
      "contain",
      "Saving Private Ryan"
    );
  });
});