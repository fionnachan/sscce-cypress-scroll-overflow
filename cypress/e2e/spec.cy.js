describe("Home Page", () => {
  it("main should have a scrollTop of 0", () => {
    cy.visit("/");
    cy.get("input").type("something");
    cy.get("main").invoke("scrollTop").should("eq", 0);
    /* cypress would move main's scrollTop to between the partially-hidden-element's bottom absolute value and the main's padding value (whichever smaller) */
    cy.pause();
  });
});
