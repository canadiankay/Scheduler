describe("Appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")

    cy.visit("/");
    
    cy.contains("Monday");
  });

  it("should book an interview", () => {
    cy.get("[alt=Add]")
    // since there are two ADd buttons, we want to hide the second one
      .first()
      .click();

    cy.get("[data-testid=student-name-input]")
      .type("Lydia Miller-Jones")

    cy.get('[alt="Sylvia Palmer"]')
      .click();

    cy.contains("Save").click();
    
    // verify that we show the student and interviewer names within and element
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer"); 
  });

  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .invoke("show")
      .first()
      .click({ force: true });

    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Michie Lynn");

    cy.get("[alt='Tori Malcolm']")
      .click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Michie Lynn");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .invoke("show")
      .first()
      .click({ force: true });

    cy.contains("Confirm")
      .click();

    cy.contains("Deleting");
    // after we press delete, we dont want there to be a deleting option anymore- we want it to disappear
    cy.contains("Deleting")
      .should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  });


});