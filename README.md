# JWT Validation for API Gateway Custom Authorization using Lambda function

This is a working example of a **Lambda function** (`index.handler`) that validates a **JWT token** by checking its integrity against a **public key** and its **expiration** (this example checks `iat + duration` instead of `exp` for personal reasons).

## How to get it running

1. Clone this repo (duh!).

2. Run `npm install` to get the dependencies: `moment` and `jsonwebtoken`.

3. Create a **RSA key pair** for your tests (more instructions (here)[cert/README.md]).

4. Run `sign.js` to create a valid signed token using your **private key** and store it in a file (`token.jwt`).

5. Run `test.js` to test the token against your **public key**.

6. Alternatively, run `tamper.js` to create a valid signed token with **another private key** so you can see it fail.

## How to check the results

API Gateway **Custom Authorizers** return an AWS **policy document** to be interpreted by the API call. In order to check if the authorizer would let a call proceed, you must check the response object: `policyDocument.Statement.Effect`, which can be either `Allow` or `Deny`.