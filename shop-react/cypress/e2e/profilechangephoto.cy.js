describe('Profile Page', () => {
  beforeEach(() => {
    // Set up authentication token in localStorage before each test
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzFiNzI1YzA4NTI1Mjg2NTZkMmQ0Y2MiLCJpYXQiOjE3MzAxNTIwNDQsImV4cCI6MTczMjc0NDA0NH0._QRClVGBJ4KUFxY737w_nRENl8PhhkBMbAPVJ5zaC7M');
    cy.visit('/profile');  // Adjust path if necessary
  });


  it('should display user information correctly', () => {

    cy.visit('/profile');

    // Перевірка, що заголовок присутній
    cy.get('h2').should('have.text', 'Мій кабінетЗагальна інформація');

  });


  it('should allow the user to upload a profile image', () => {
    cy.get('button').contains('Завантажити Фото Продукту').click()
    cy.get('input[type="file"]').selectFile('C:/FullStackProject/Shop/uploads/anime-anime-girls-purple-background-sunset-walkway-Russia-1779241-wallhere.com.jpg', { force: true });;;
    cy.get('button').contains('Зберегти').click();
  });


  it('should allow the user to logout', () => {
    cy.get('p').contains('Вихід').click();
    cy.on('window:confirm', () => true); // Confirm the logout
  });
  it('should redirect to login if no token is present', () => {
    localStorage.removeItem('token');
    cy.visit('http://localhost:3000/profile');
  });
});
