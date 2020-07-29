/* eslint no-unused-vars: off */
/* global env */
const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL_DAYTONA);

export default body => api.post('/astradaihatsucommercewebservices/v2/astradaihatsu/orderstatus/update')
  .send(body);
