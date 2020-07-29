const randomstring = require('randomstring');

const randomMaxEmail = randomstring.generate({
  charset: 'string',
  length: '81',
});

const randomMaxfirstName = randomstring.generate({
  charset: 'string',
  length: '50',
});

const randomMaxlastName = randomstring.generate({
  charset: 'string',
  length: '50',
});

export default {
  Email: 'renni.aja8@gmail.com',
  FirstName: 'test',
  LastName: 'registrasi',
  Password: 'o02k6B5cS+ULS+KuYm2LtSNw9fNJbHfjdQs6VJ5hY7p+Onf9gf6uyKNwT4hckRzTDEmglwTOJE1y\n9dwzhShshdEqBfCWoixMCHS497qFqWp21IZcWmZ8b9+EtoUeFBrH3byP+oVH0Y405HvofHmAr6HK\nQhccv5BUY7oEsyYVs526dOE6adJzpM2kV0R+P+FU7UUWtDhgjbmhJwNFP54hbBFquvXhaeJuNxFe\n9jWFZ5qk3FIP7bieILDSIkRGdHaYdJF4xtYMXodG4VQiMIV8DTAU6CFIjTMQfM7+PTJZqcxthcy3\nv367FNtCFaS/H/MQAuB/Q5MtlOdjpENevqWW2w\u003d\u003d\n',
  PhoneNo: '081456155090',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const regsiteredEmailRequest = {
  Email: 'testerlogin.DSO@gmail.com',
  FirstName: 'test',
  LastName: 'registrasi',
  Password: '0S8AWFvrTbTXXHGFTOZS/7s22ZrJLFQqjKqFDUyewpQFslyF5xbwEONGTrRIjLzTCHk7EVYKZAm0\nv+mu9QxLRwvXJ4JYqE5ElGB1UmFhrhKriW4aGp6dJI1PUsnuokMzP4I1v1CH3DLBh4TtsFwHMc6v\n+MVOVp3ogspKpI7xupnDnt+YmNVLOsjq9bh9GFy9g5mXwRwReMWAhL1RLiLTK/G8rY4SSWhb/WFZ\nIPXhYhIXfUpkIzaK9UPN05da0qbe6pjvSIUzUdSgxkIr6DEM/D45W7VrlyFAJ4WkHVPtVjX0Yrii\nXnd/Lf0KuaYNbX1zD3/K+ym0MuyRnOfPAQ9geg\u003d\u003d\n',
  PhoneNo: '081456155090',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

export const inactiveEmail = {
  Email: 'xxxyyy0990@gmail.com',
  FirstName: 'test',
  LastName: 'registrasi',
  Password: 'HOek+lGLDkj9P8dGmpDfzvfRmGUvd3qwM+YpWhf1d68qw+/CJwNGDEO/WLu9vMT0YVJdipIprAYX\nRT9YWir6VMg98JYRnjyw3E72AemTr+xhvj37Sdb6KRZimOVlumibwDxSACXgHtr8XIj/MdeFnTEF\nezgsv2u2o5EC6GXQFrUkPJq0cHgoNNrPkUKMY2k35C//APKBiUX1YDFHzBsX77DqU3DSAA8S3ACn\ngsN0UvhLPJD3+xw5aWJvUQx/PrCPMOMjKOPXwd13dkFWK47UMOGcDxWGoYPbEwz17WV5WNijt+KC\n6wKC52JZiwJeqAOrUNHzb+lgT3mon/65DA3J+w\u003d\u003d\n',
  PhoneNo: '081456155090',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data forregular registrasi input max length

export const maxlengthInput = {
  Email: 'testingAT.ABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJABCDEFGHIJ@gmail.com',
  FirstName: `${randomMaxfirstName}`,
  LastName: `${randomMaxlastName}`,
  Password: 'HOek+lGLDkj9P8dGmpDfzvfRmGUvd3qwM+YpWhf1d68qw+/CJwNGDEO/WLu9vMT0YVJdipIprAYX\nRT9YWir6VMg98JYRnjyw3E72AemTr+xhvj37Sdb6KRZimOVlumibwDxSACXgHtr8XIj/MdeFnTEF\nezgsv2u2o5EC6GXQFrUkPJq0cHgoNNrPkUKMY2k35C//APKBiUX1YDFHzBsX77DqU3DSAA8S3ACn\ngsN0UvhLPJD3+xw5aWJvUQx/PrCPMOMjKOPXwd13dkFWK47UMOGcDxWGoYPbEwz17WV5WNijt+KC\n6wKC52JZiwJeqAOrUNHzb+lgT3mon/65DA3J+w\u003d\u003d\n',
  PhoneNo: '081456155090',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};

// data forregular registrasi input max length +1 chars

export const negativeRequest = {
  Email: `testingAT.${randomMaxEmail}@gmail.com`,
  FirstName: `${randomMaxfirstName}`,
  LastName: `${randomMaxlastName}`,
  Password: 'HOek+lGLDkj9P8dGmpDfzvfRmGUvd3qwM+YpWhf1d68qw+/CJwNGDEO/WLu9vMT0YVJdipIprAYX\nRT9YWir6VMg98JYRnjyw3E72AemTr+xhvj37Sdb6KRZimOVlumibwDxSACXgHtr8XIj/MdeFnTEF\nezgsv2u2o5EC6GXQFrUkPJq0cHgoNNrPkUKMY2k35C//APKBiUX1YDFHzBsX77DqU3DSAA8S3ACn\ngsN0UvhLPJD3+xw5aWJvUQx/PrCPMOMjKOPXwd13dkFWK47UMOGcDxWGoYPbEwz17WV5WNijt+KC\n6wKC52JZiwJeqAOrUNHzb+lgT3mon/65DA3J+w\u003d\u003d\n',
  PhoneNo: '081456155090',
  AccountType: '1',
  Action: '',
  ApplicationName: '35AE57AD-572F-4EAF-B908-3B0523ADEDB8',
  DeviceType: '0',
  OperatingSystem: '0',
  UserVersion: '1.0.0',
};
