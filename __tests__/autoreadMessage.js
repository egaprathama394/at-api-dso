import getMessage from '../endpoints/message';
import * as messageSchema from '../schemaValidator/message';
import getProfile from '../endpoints/profile';
import * as profileSchema from '../schemaValidator/profile';
import * as body from '../data/profile';
import getautoread from '../endpoints/autoreadMessage';

const fs = require('fs');
const { matchers } = require('jest-json-schema');

expect.extend(matchers);

const ambilToken = fs.readFileSync('./token.json');
const objToken = JSON.parse(ambilToken);

const token = objToken.login;

describe('Autoread Message Contact Us', () => {
  test('Autoread message at contact us successfully using authorized token - positive test cases', async () => {
    const response = await getProfile(token, body.default);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(profileSchema.default);
    const userId = await response.body.userAccount.email;
    const queryParam = {
      userId: `${userId}`,
    };
    const responseMessage = await getMessage(token, queryParam);
    expect(responseMessage.status).toEqual(200);
    expect(responseMessage.body).toMatchSchema(messageSchema.default);
    const idMessage = 16562;
    const messageId = await responseMessage.body.messages.find((element) => {
      const idElement = element.id;
      return idElement === idMessage;
    });
    const threadId = {
      threadId: 16562,
    };
    const responseAutoread = await getautoread(token, threadId);
    expect(responseAutoread.status).toEqual(200);
    expect(responseAutoread.body).toMatchSchema(messageSchema.autoreadSchema);
    expect(responseAutoread.body.messages[0].message).toEqual(messageId.message);
  });

  test('Autoread message at contact us successfully using wrong threadId and authorized token - negative test cases', async () => {
    const threadId = {
      threadId: 999999,
    };
    const responseAutoread = await getautoread(token, threadId);
    expect(responseAutoread.status).toEqual(200);
    expect(responseAutoread.body).toMatchSchema(messageSchema.negativerequest);
    expect(responseAutoread.body).toMatchSnapshot();
  });

  test('Autoread message at contact us successfully using unauthorized threadId but using authorized token - negative test cases', async () => {
    const threadId = {
      threadId: 16560,
    };
    const responseAutoread = await getautoread(token, threadId);
    expect(responseAutoread.status).toEqual(401);
    expect(responseAutoread.body).toMatchSchema(messageSchema.negativerequest);
    expect(responseAutoread.body.message).toEqual('Internal Server Error');
  });
});
