import getCreditSimulation from '../endpoints/creditSimulation';
import * as body from '../data/creditSimulation';
import * as creditSimulationSchema from '../schemaValidator/creditSimulation';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Credit Simulation', () => {
  test('credit Simulation us successfully using authorized token - positive test cases', async () => {
    const response = await getCreditSimulation(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(creditSimulationSchema.default);
  });
});
