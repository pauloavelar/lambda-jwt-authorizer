const fs = require('fs');
const auth = require('./index');

const example = 'arn:aws:apigateway:us-east-1::a12345678a45:/test/mydemoresource/*';

fs.readFile(__dirname + '/token.jwt', (err, token) => {
  if (err) {
    console.log('Error loading JWT token. Please run sign.js first to create a token.');
    process.exit(1);
  }

  const event = {
    authorizationToken: token.toString(),
    methodArn: example
  };

  auth.handler(event, null /* context */, (err, res) => {
    console.log(JSON.stringify(res, null, 2));
  });
});
