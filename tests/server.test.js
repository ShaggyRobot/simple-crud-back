const request = require('supertest');
const { server } = require('../src/app');

const bob = {
  name: 'Bob',
  age: 42,
  hobbies: ['Breathing', 'Existing']
};

const youngBob = {
  name: 'Bob',
  age: 21,
  hobbies: ['Sports', 'Girls', 'Parties']
};

describe('Starting server and expecting that it:', () => {
  const id = '';
  it('GET: should return [] at first GET@/person', async () => {
    const res = await request(server).get('/person');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
  it('POST(new person): should create a new person & return it back with id property', async () => {
    const res = await request(server).post('/person').send(bob);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject(bob);
    expect(res.body).toHaveProperty('id');
    server.id = res.body.id;
  });
  it('GET(by id): should return this person, when requested by id', async () => {
    const res = await request(server).get(`/person/${server.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(bob);
  });
  it('PUT(new person by id) should return updated person', async () => {
    const res = await request(server).put(`/person/${server.id}`).send(youngBob);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(youngBob);
  });
});
