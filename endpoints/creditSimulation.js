const supertest = require('supertest');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const api = supertest(process.env.API_BASE_URL_MOBILE);

export default (token, body) => api.post('/api/creditsimulation')
  .set('ClientTag', process.env.CLIENT_TAG_MOBILE)
  .set('ApplicationName', process.env.APPLICATION_NAME_MOBILE)
  .set('Authorization', `Bearer ${token}`)
  .send(body);
