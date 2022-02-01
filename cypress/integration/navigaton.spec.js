describe("Navigation", () => {
  it("should visit root", () => {
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    // cy.contains("[data-testid=day]", "Tuesday")
    cy.contains("li", "Tuesday")
      .click()
      .get(".day-list__item--selected")
      .should("have.class", "day-list__item--selected");
  });
});