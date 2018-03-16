# Instructions

Add your private and public keys here.

- Private: `private.key`
- Public: `public_key.cert`

## If you need help creating a RSA key pair

1. Create the key pair using SSH keygen:

```
ssh-keygen -b 2048 -t rsa -f private.key
```

2. Convert the public key to a PEM encoded file:

```
ssh-keygen -f private.key.pub -e -m pem > public_key.crt
```

For testing purposes, you might want to skip setting a passphrase.