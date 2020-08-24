/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";
describe("Testuje strone glowna", () => {
  context("uruchomienie strony", () => {
    it("visit webpage", () => {
      cy.visit(redesignPage);
    });
  });
});
beforeEach(() => {
  cy.viewport(1920, 1080);
});

context("testy", () => {
  describe("Czy strona redesign poprawnie sie laduja w ogole", () => {
    it("should open redesignPage", () => {
      cy.visit(redesignPage);
    });
  });

  describe("Czy nawigacja i menu poprawnie działa", () => {
    it("should check nav and every li", () => {
      cy.get('[href="/register"] > .menu-item').should("contain", "Sign Up");
      cy.get('[href="/login"] > .menu-item').should("contain", "Login");
      cy.get(".ham").click();
      cy.get('[aria-current="page"] > li > .menu-item').should(
        "contain",
        "Home"
      );
      cy.get('[href="/movie"] > li > .menu-item').should("contain", "Movies");
      cy.get('[href="/tv"] > li > .menu-item').should("contain", "TV-Shows");
      cy.get('[href="/search"] > li > .menu-item').should("contain", "Search");
      cy.get('[href="/login"] > li > .menu-item').should("contain", "Login");
      cy.get('[href="/register"] > li > .menu-item').should(
        "contain",
        "Sign Up"
      );
      cy.get(".ham").click();
    });
  });

  describe("Czy menu otwiera się poprawnie, renderuje i zamyka", () => {
    it("should open menu, check and close", () => {
      cy.get(".ham").click();
      cy.wait(800);
      cy.get(".ham").click();
    });
  });

  describe("Czy menu otwiera się poprawnie, renderuje i zamyka", () => {
    it("should check that movies, tv shows and actors titles are on page", () => {
      cy.get(".home > :nth-child(2)").should("contain", "MOVIES");
      cy.get(".home > :nth-child(4)").should("contain", "TV-SHOWS");
      cy.get(".home > :nth-child(6)").should("contain", "PEOPLE");
    });
  });

  describe("Czy slidery dzialaja poprawnie", () => {
    it("should click on arrow on slider with movie", () => {
      cy.get(
        ":nth-child(3) > .slider-container-wrappper > .next > .arrow"
      ).click();
      cy.get(":nth-child(3) > .slider-container-wrappper > .slider-container");
    });
    it("should click on arrow on slider with tv-shows", () => {
      cy.get(
        ":nth-child(5) > .slider-container-wrappper > .next > .arrow"
      ).click();
      cy.get(":nth-child(5) > .slider-container-wrappper > .slider-container");
    });
    it("should click on arrow on slider with peoples", () => {
      cy.get(
        ":nth-child(7) > .slider-container-wrappper > .next > .arrow"
      ).click();
      cy.get(":nth-child(7) > .slider-container-wrappper > .slider-container");
    });
  });

  describe("Czy podpowiedzi działają poprawnie", () => {
    it("should type saving private ryan in search input", () => {
      cy.get(".search-input").type("saving private ryan");
    });
    it("should be visible saving private ryan in suggestions", () => {
      cy.get(".result").should("contain", "Saving Private Ryan");
    });
  });
});
