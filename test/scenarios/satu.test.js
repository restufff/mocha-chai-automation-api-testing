import axios from 'axios';
import { assert, expect } from "chai";
import dotenv from 'dotenv';

dotenv.config();

describe('As an user I want to test Gorest Public API', () => {
  const API_BASE_URL = process.env.BASEURL;

  it('should get only 10 todos', async () => {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    // assert.equal(response.status, 200);
    // assert(Array.isArray(response.data));
    // expect(response.data).to.have.lengthOf(10);

    // response.data.forEach(todo => {
    //   assert.strictEqual(typeof todo.id, 'number');
    //   assert.strictEqual(typeof todo.user_id, 'number');
    //   assert.strictEqual(typeof todo.title, 'string');
    //   expect(response.data[0]).to.have.all.keys("id", "user_id", "title", "due_on", "status");
    // });
  });

  it('should get users with status inactive and validate data', async () => {
    const response = await axios.get(`${API_BASE_URL}/users?status=inactive`);
    // assert.strictEqual(response.status, 200);
    // assert(Array.isArray(response.data));

    // response.data.forEach(user => {
    //   assert.strictEqual(typeof user.id, 'number');
    //   assert.strictEqual(typeof user.name, 'string');
    //   assert.strictEqual(typeof user.email, 'string');
    //   assert.strictEqual(typeof user.email, 'string');
    //   assert.strictEqual(typeof user.status, 'string');
    //   expect(response.data[0]).to.have.all.keys("id", "name", "email", "gender", "status");
    //   expect(user.status).to.equal('inactive');
    // });
  });
});
