describe('User Login - Acceptance Test', () => {
	it('logs in a user with valid credentials', () => {
	  cy.visit('http://localhost:5173/login') // 🔁 Update to your actual URL
  
	  cy.get('input[name="username"]').type('testuser') // 🔁 Update selector & value
	  cy.get('input[name="password"]').type('testpass') // 🔁 Update selector & value
  
	  cy.get('button[type="submit"]').click()
  
	  // ✅ Acceptance condition: user should be redirected or see dashboard content
	  cy.url().should('include', '') // 🔁 or whatever path you expect
	  cy.contains('Welcome back, testuser') // Optional: check for user content
	})
  })