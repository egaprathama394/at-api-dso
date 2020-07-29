/* eslint no-unused-vars: off */
/* global env */
const supertest = require('supertest');
const env = require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const api = supertest(process.env.API_BASE_URL_MOBILE);

export default body => api.post('/api/masterdatainfo')
  .set('ClientTag', process.env.CLIENT_TAG)
  .set('server-code', process.env.SERVER_CODE_MOBILE)
  .send(body);
