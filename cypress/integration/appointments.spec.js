describe("Appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")
    cy.visit("/");
  });
  
  it("should book an interview", () => {
    cy.contains("Monday");

    cy.get("[alt=Add]")
    // since there are two ADd buttons, we want to hide the second one
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones")

    cy.get('[alt="Sylvia Palmer"]')
      .click();

    cy.contains("Save").click();

        
  });


});