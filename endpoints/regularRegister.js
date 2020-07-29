/* eslint no-unused-vars: off */
/* global env */
const supertest = require('supertest');
const env = require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const api = supertest(process.env.API_BASE_URL);

export default body => api.post('/api/signup')
  .set('ClientTag', process.env.CLIENT_TAG)
  .set('ApplicationName', process.env.APPLICATION_NAME)
  .set('server-code', process.env.SERVER_CODE)
  .send(body);
