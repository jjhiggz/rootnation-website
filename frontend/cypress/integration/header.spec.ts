describe("header", () => {
  it("should exist", () => {
    cy.visit("/");
    cy.get("header").should("exist");
  });

  describe("large viewport", () => {
    beforeEach(() => {
      cy.viewport("macbook-16");
    });
    it("should contain about, artists, merch, services, events donate when fully expanded", () => {
      cy.visit("/");
	  cy.get("#right-nav-dt").should("be.visible")
	  cy.get("#right-nav-mb").should("not.be.visible")
    });
  });
});

describe("small viewport", () => {
  beforeEach(() => {
    cy.viewport("iphone-xr");
  });
  it("should not contain about, artists, merch, services, events donate when fully expanded", () => {
	  cy.get("#routes-nav").should("not.be.visible")
	  cy.get("#right-nav-mb").should("be.visible")
  });
});
