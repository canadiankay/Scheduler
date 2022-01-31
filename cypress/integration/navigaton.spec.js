describe("Navigation", () => {
  it("should visit root", () => {
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    // get the list item that contains text Tuesday and click on it
    // cy.get("li")
    // cy.contains("li", "Tuesday")
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      // .should("have.css", "background-color", "rgb(242, 242, 242)")
      .should("have.class", "day-list__item--selected");
  });
});