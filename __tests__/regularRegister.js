import postRegist from '../endpoints/regularRegister';
import * as registSchema from '../schemaValidator/regularRegister';
import * as body from '../data/regulerRegister';

const { matchers } = require('jest-json-schema');

expect.extend(matchers);

describe('Regular Registration', () => {
  test('Can registered using unregistered email - positive test cases', async () => {
    const response = await postRegist(body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(registSchema.default);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });

  test('Can registered using input max at email, first name, and last name - positive test cases', async () => {
    const response = await postRegist(body.maxlengthInput);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(registSchema.default);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });

  test('Can not registration using registered email - negative test cases', async () => {
    const response = await postRegist(body.regsiteredEmailRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(registSchema.default);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });

  test('Can not registration using email register but not active yet - negative test cases', async () => {
    const response = await postRegist(body.inactiveEmail);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(registSchema.default);
    Reflect.deleteProperty(response.body, 'build');
    expect(response.body).toMatchSnapshot();
  });

  test('Can not registration using input max+1 chars at email, first name, and last name - negative test cases', async () => {
    const response = await postRegist(body.negativeRequest);
    expect(response.status).toEqual(500);
    expect(response.body).toMatchSchema(registSchema.negativeRequestSchema);
    expect(response.body).toMatchSnapshot();
  });
});
