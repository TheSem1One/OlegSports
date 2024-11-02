// cypress/integration/login.cy.js

describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('auth/');
  });

  it('should render the login form', () => {
    // Check if email and password input fields and submit button are present
    cy.get('input[name="email"]')
    cy.get('input[name="password"]')
    cy.get('button[type="submit"]')
  });

  it('should allow the user to fill out the form and submit', () => {
    cy.get('input[name="email"]').type('oleh228t@gmail.com');
    cy.get('input[name="password"]').type('031102Oleg');
    cy.intercept('POST', '/api/login', { 
      statusCode: 200,
      body: { payload: { token: 'mockToken' } }
    }).as('loginRequest');
    cy.get('button[type="submit"]').click();

  });
});
