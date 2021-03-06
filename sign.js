const fs = require('fs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const claims = {
  ent: {
    cod: 1234
  },
  iat: moment().unix()
};

fs.readFile(__dirname + '/cert/private.key', (err, key) => {
  if (err) {
    console.log('Error loading private key. Double check it exists in the cert directory.');
    process.exit(1);
  }

  const token = jwt.sign(claims, key, {
    algorithm: 'RS256'
  });

  fs.writeFile(__dirname + '/token.jwt', token, (err) => {
    if (err) {
      console.log('Error writing to token.jwt file. The token will be logged here.');
      console.log(token);
    } else {
      console.log('Succesfully created a JWT token. Run the test script to check it.');
    }
  });
});