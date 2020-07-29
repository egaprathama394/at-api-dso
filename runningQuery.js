import * as shell from 'shelljs';

async function query() {
  await shell.exec('sh ./seedData/cleanUp/cleanUpBookingService.sh');
  await shell.exec('sh ./seedData/cleanUp/cleanUpUserProfile.sh');
}

query();
