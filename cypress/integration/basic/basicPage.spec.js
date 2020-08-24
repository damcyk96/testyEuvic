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

  describe("Czy w menu jest Login oraz Sign Up", () => {
    it("should check Login ", () => {
      cy.get(".knkMDf").should("contain", "Login");
    });
    it("should check Sign Up ", () => {
      cy.get(":nth-child(2) > .csacnt").should("contain", "Sign up");
    });
  });

  describe("Czy renderuje filmy", () => {
    it("should upcoming movies", () => {
      cy.get(":nth-child(1) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(1) > .sc-kGXeez > :nth-child(3) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(1) > .sc-kGXeez > :nth-child(8) > .sc-gzVnrw").should(
        "exist"
      );
    });
    it("should popular movies", () => {
      cy.get(":nth-child(2) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(2) > .sc-kGXeez > :nth-child(3) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(2) > .sc-kGXeez > :nth-child(8) > .sc-gzVnrw").should(
        "exist"
      );
    });
    it("should top movies", () => {
      cy.get(":nth-child(4) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(4) > .sc-kGXeez > :nth-child(3) > .sc-gzVnrw").should(
        "exist"
      );
      cy.get(":nth-child(4) > .sc-kGXeez > :nth-child(8) > .sc-gzVnrw").should(
        "exist"
      );
    });
  });

  describe("Czy renderuje hover oraz przyciski view", () => {
    it("should mouseover on first movie in upcomings and check components", () => {
      cy.get(":nth-child(1) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw")
        .should("exist")
        .trigger("mouseover");
      cy.get(
        ":nth-child(1) > .sc-kGXeez > :nth-child(1) > .sc-dnqmqq > .kcerPM > .sc-bwzfXH > :nth-child(1) > path"
      ).should("exist");
      cy.get(
        ":nth-child(1) > .sc-kGXeez > :nth-child(1) > .sc-dnqmqq > .kcerPM > .sc-ifAKCX"
      )
        .should("exist")
        .should("contain", "View");
    });
    it("should mouseover on first movie in popular and check components", () => {
      cy.get(":nth-child(2) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw")
        .should("exist")
        .trigger("mouseover");
      cy.get(
        ":nth-child(2) > .sc-kGXeez > :nth-child(1) > .sc-dnqmqq > .kcerPM > .sc-ifAKCX"
      )
        .should("exist")
        .should("contain", "View");
    });
    it("should mouseover on first movie in top movies and check components", () => {
      cy.get(":nth-child(4) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw")
        .should("exist")
        .trigger("mouseover");
      cy.get(
        ":nth-child(4) > .sc-kGXeez > :nth-child(1) > .sc-dnqmqq > .kcerPM > .sc-ifAKCX"
      )
        .should("exist")
        .should("contain", "View");
    });
  });

  // describe("Sprawdzam przycisk view i wracam na główną stronę w upcoming", () => {
  //   it("should mouseover on first movie in upcomings and check components", () => {
  //     cy.get(':nth-child(1) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw')

  //   });
  // });

  // describe("Sprawdzam przycisk view i wracam na główną stronę w popular", () => {
  //   it("should mouseover on first movie in popular and check components", () => {
  //     cy.get(":nth-child(2) > .sc-kGXeez > :nth-child(1) > .sc-gzVnrw")
  //       .should("exist")
  //       .trigger("mouseover");
  //     cy.get(
  //       ":nth-child(2) > .sc-kGXeez > :nth-child(1) > .sc-dnqmqq > .kcerPM > .sc-ifAKCX"
  //     )
  //       .should("exist")
  //       .should("contain", "View")
  //       .click();
  //   });
  // });

  describe("Czy Login oraz SignUp przekierowywują", () => {
    it("should check click login and check correct url ", () => {
      cy.get(".knkMDf").should("contain", "Login").click();
      cy.url().should("eq", basicPage + "login");
      cy.visit(basicPage);
    });
    it("should check click signup and check correct url ", () => {
      cy.get(":nth-child(2) > .csacnt").should("contain", "Sign up").click();
      cy.url().should("eq", basicPage + "signup");
      cy.visit(basicPage);
    });
  });
});
