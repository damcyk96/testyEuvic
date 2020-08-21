/// <reference types="Cypress" />

const redesignPage = "https://musing-ramanujan-45d347.netlify.app/";

describe("Czy poprawnie renderuje SignUp", () => {
  it("should open basicPage", () => {
    cy.visit(redesignPage);
  });
  it("should click sign up in menu", () => {
    cy.get('[href="/register"] > .menu-item').click();
  });
  it("should check email letter", () => {
    cy.get(".login-form > :nth-child(1)").should("contain", "Email");
  });
  it("should check password letter", () => {
    cy.get(".login-form > :nth-child(2)").should("contain", "Password");
  });
  it("should check repeat password letter", () => {
    cy.get(".login-form > :nth-child(3)").should("contain", "Repeat password");
  });
  it("should type in email input", () => {
    cy.get(":nth-child(1) > .input").type("mail@mail.com");
  });
  it("should type in password input", () => {
    cy.get(":nth-child(2) > .input").type("loremipsum");
  });
  it("should type in email input", () => {
    cy.get(":nth-child(3) > .input").type("loremipsum");
  });
  it("should get a register button", () => {
    cy.get(".login-form > .user-btn").should("contain", "Register");
  });
});
