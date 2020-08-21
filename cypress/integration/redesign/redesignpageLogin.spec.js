/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";

describe("Czy poprawnie renderuje Login", () => {
  it("should open basicPage", () => {
    cy.visit(redesignPage);
  });
  it("should click login in menu", () => {
    cy.get('[href="/login"] > .menu-item').click();
  });
  it("should check login letter", () => {
    cy.get(".login-form > :nth-child(1)").should("contain", "Username");
  });
  it("should check password letter", () => {
    cy.get(".login-form > :nth-child(2)").should("contain", "Password");
  });
  it("should type in login input", () => {
    cy.get(":nth-child(1) > .input").type("loremipsum");
  });
  it("should type in password input", () => {
    cy.get(":nth-child(2) > .input").type("loremipsum");
  });
  it("should get a login button", () => {
    cy.get(".login-form > .user-btn").should("exist").and("have.text", "Login");
  });
});
