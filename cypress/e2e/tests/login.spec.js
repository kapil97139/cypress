describe('Login Test', () => {
    it('Should log in successfully with valid credentials', () => {
      // Visit the login page
      cy.visit('https://www.google.com');
  
      // Get and print the page title
      cy.title().then((title) => {
        cy.log('Page title is: ' + title);
        console.log('Page title is:', title); // This will log in the console where Cypress runs
      });
    });
  });
  //