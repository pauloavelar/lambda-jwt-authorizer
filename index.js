const fs = require('fs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

exports.handler = (event, context, callback) => {
  const token = event.authorizationToken;
  const key = fs.readFileSync(__dirname + '/cert/public_key.crt');

  jwt.verify(token, key, (err, decoded) => {
    if (err || !decoded.iat) {
      err = true;
    } else {
      const exp = moment.unix(decoded.iat).add(15, 'minutes');
      err = exp.isBefore(moment()); // now
    }

    callback(null, {
      principalId: 'PV',
      policyDocument: {
        Version: '2012-10-17',
        Statement: [{
          Resource: event.methodArn,
          Action: 'execute-api:Invoke',
          Effect: !err ? 'Allow' : 'Deny'
        }]
      }
    });
  });
};