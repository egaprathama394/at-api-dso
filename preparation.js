import writeJsonFile from 'write-json-file';
import * as shell from 'shelljs';
import getToken from './endpoints/token';
import body from './data/token';

export default async () => {
  const daftarToken = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const iterator of body) {
    // eslint-disable-next-line no-await-in-loop
    const response = await getToken(iterator.body);
    daftarToken[iterator.name] = response.body.access_token;
  }

  await writeJsonFile('token.json', daftarToken);
  await shell.exec('sh ./seedData/cleanUp/cleanUpTransaction.sh');
  await shell.exec('sh ./seedData/cleanUp/cleanUpUserProfile.sh');
};
