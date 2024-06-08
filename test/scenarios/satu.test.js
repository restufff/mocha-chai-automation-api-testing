describe('As a user I want to test Gorest Public API', () => {
  const API_BASE_URL = Cypress.env('BASEURL');

  it('should get only 10 todos', () => {
    cy.request(`https://gorest.co.in/public/v2/todos`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.lengthOf(10);

      response.body.forEach(todo => {
        expect(todo).to.have.all.keys('id', 'user_id', 'title', 'due_on', 'status');
        expect(todo.id).to.be.a('number');
        expect(todo.user_id).to.be.a('number');
        expect(todo.title).to.be.a('string');
        expect(todo.due_on).to.be.a('string'); 
        expect(todo.status).to.be.a('string');
      });
    });
  });

  it('should get users with status inactive and validate data', () => {
    cy.request(`https://gorest.co.in/public/v2/users?status=inactive`).then((response) => {
      expect(response.status).to.eq(200);
      //test github actions
      response.body.forEach(user => {
        expect(user).to.have.all.keys('id', 'name', 'email', 'gender', 'status');
        expect(user.id).to.be.a('number');
        expect(user.name).to.be.a('string');
        expect(user.email).to.be.a('string');
        expect(user.gender).to.be.a('string'); 
        expect(user.status).to.equal('inactive');
      });
    });
  });
});
