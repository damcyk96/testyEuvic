/// <reference types="Cypress" />

let login = Math.random().toString(36).substring(7);
let email = login + "@mail.com";
let shortPassword = Math.random().toString(36).substr(2, 5);
let longPassword = Math.random().toString(36).substr(2, 15);

const basicPage = "https://brave-benz-5b19c8.netlify.app/";
describe("Testuje strone rejestracji", () => {
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
  describe("Czy strona rejestracji poprawnie sie renderuje w ogole", () => {
    it("should open basicPage", () => {
      cy.get(":nth-child(2) > .csacnt").click();
    });
    it("should check correct url", () => {
      cy.url().should("eq", basicPage + "signup");
    });
    it("should have check title", () => {
      cy.get(".jaPgXM").should(
        "have.text",
        "First, create an Search Movie App account."
      );
    });
    it("should check email input (label and placeholer)", () => {
      cy.get("form > :nth-child(1)").should("contain", "Email");
      cy.get(":nth-child(1) > .sc-jzJRlG").should(
        "have.attr",
        "placeholder",
        "youremail@example.com"
      );
    });
    it("should check password input (placeholder and label)", () => {
      cy.get("form > :nth-child(3) > .sc-bdVaJa").should("contain", "Password");
      cy.get(":nth-child(3) > .sc-jzJRlG").should(
        "have.attr",
        "placeholder",
        "Your password"
      );
    });
    it("should check create account button", () => {
      cy.get(".sc-EHOje").should("have.text", "Create Account");
    });
  });

  describe("Czy wyświetli required po kliknięciu przycisku create account", () => {
    it("should click create account input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should check if required is visible in Email", () => {
      cy.get("form > :nth-child(1)").should("contain", "Required");
    });
    it("should check if required is visible in Password", () => {
      cy.get("form > :nth-child(3)").should("contain", "Required");
    });
  });

  describe("Spróbuj utworzyć już istniejące konto", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").type("mail@mail.com");
    });
    it("should write a used password in input", () => {
      cy.get(":nth-child(3) > .sc-jzJRlG").type("qwertyasdfg");
    });
    it("should click create account input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should be visible cogo-toast on failure", () => {
      cy.get(".ct-toast")
        .should("be.visible")
        .should("have.text", "Wrong login or password");
    });
  });

  describe("Spróbuj utworzyć konto bez @ w emailu", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").clear().type(login);
    });
    it("should click create account input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should be invalid mail in text", () => {
      cy.get(".bRlJXZ").should("have.text", "Invalid email");
    });
  });

  describe("Spróbuj utworzyć konto z zbyt krótkim hasłem", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").clear().type(email);
    });
    it("should write a used password in input", () => {
      cy.get(":nth-child(3) > .sc-jzJRlG").clear().type(shortPassword);
    });
    it("should click create account input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should be visible that password is too short", () => {
      cy.get(":nth-child(3) > .bRlJXZ").should(
        "have.text",
        "password should be 7 or more char"
      );
    });
  });

  describe("Spróbuj utworzyć konto", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").clear().type(email);
    });
    it("should write a used password in input", () => {
      cy.get(":nth-child(3) > .sc-jzJRlG").clear().type(longPassword);
    });
    it("should click create account input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should be on redirect on main page", () => {
      cy.url().should("eq", "https://brave-benz-5b19c8.netlify.app/");
    });
    it("should be visible icon", () => {
      cy.get("span > .sc-bdVaJa").should("be.visible");
    });
  });

  describe("wyloguj się by powrócić do stanu początkowego", () => {
    it("should open menu", () => {
      cy.get("span > .sc-bdVaJa").click();
    });
    it("should click logout", () => {
      cy.get(".sc-EHOje > .sc-bdVaJa").should("have.text", "Logout").click();
    });
  });
});
