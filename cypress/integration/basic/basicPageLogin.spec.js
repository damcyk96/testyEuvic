/// <reference types="Cypress" />
let fakeLogin = Math.random().toString(36).substring(2, 7);
let fakeDomain = Math.random().toString(36).substring(2, 7);
let fakeEmail = fakeLogin + "@" + fakeDomain + ".com";
let login = "mailtest";
let email = login + "@mail.com";
let password = "qwerty12345";

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
  describe("Czy strona logowania poprawnie sie renderuje w ogole", () => {
    it("should open login", () => {
      cy.get(".knkMDf").click();
    });
    it("should check correct url", () => {
      cy.url().should("eq", basicPage + "login");
    });
    it("should check correct title", () => {
      cy.get(".jaPgXM").should(
        "contain",
        "Sign in to your Search Movie App account."
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
      cy.get(".sc-EHOje").should("have.text", "Login");
    });
  });

  describe("Czy wyświetli required po kliknięciu przycisku Login", () => {
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

  describe("Invalid mail in input", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").type(fakeLogin);
    });
    it("should write a used password in input", () => {
      cy.get(":nth-child(3) > .sc-jzJRlG").type("qwertyasdfg");
    });
    it("should click login input", () => {
      cy.get(".sc-EHOje").click();
    });
    it("should be visible invalid mail on failure", () => {
      cy.get(".bRlJXZ").should("have.text", "Invalid email");
    });
  });

  describe("Spróbuj zalogować się na nieistniejące konto", () => {
    it("should clear inputs", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").clear().should("have.text", "");
      cy.get(":nth-child(3) > .sc-jzJRlG").clear().should("have.text", "");
    });

    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").type(fakeEmail);
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

  describe("Spróbuj zalogować się na konto", () => {
    it("should write a used email in input", () => {
      cy.get(":nth-child(1) > .sc-jzJRlG").clear().type(email);
    });
    it("should write a used password in input", () => {
      cy.get(":nth-child(3) > .sc-jzJRlG").clear().type(password);
    });
    it("should click login", () => {
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
