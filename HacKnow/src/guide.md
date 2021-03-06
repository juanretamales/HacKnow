## uPort Authentication 

While uPort can be used in place of traditional authentication, it does not function in quite the same way.  Rather than authenticating a user in order to provide access to data personal data stored on a remote server, the user holds their data in their uPort wallet app, and may approve requests by another application to share pieces of it.  This allows applications to run entirely in the browser, allowing users to populate the interface with the data they store on their phones.

## Requesting user data

Because this architecture doesn't require a server to authenticate against, there is no distinction between **logging in** and **requesting data**.  Both are accomplished with the `Connect.requestDisclosure()` method from `uport-connect` (exported as `uport` from `src/uport/connect.js`).  

To manage communication between the browser and the mobile app, we make use of a number of different **transports**, including QR codes, push notifications, and a uport messaging server which provide an abstraction in which actions on a user's phone can be reflected in the browser immediately.  

In particular, the pattern exposed by `uport-connect` is one of requests and responses, in which the developer must explicitly specify what action should be taken when a response comes back from a particular request.  To ease the use of the request-response pattern, this boilerplate wraps this behavior in redux actions, with the modules that define each action also setting up a listener for its response.

For more details and documentation on `uport-connect`, see the uPort documentation site [here](https://developer.uport.me)

## Other requests

uPort also supports requests for users to sign claims (i.e. json data) via `requestVerificationSignature` and make ethereum transactions with `sendTransaction`. It also has the ability to issue signed claims to users, both from the browser with `sendVerification` or as pre-signed JWTs generated by some other service, with `sendJWT`.  

All of these methods, `{ requestDisclosure, requestVerificationSignature, sendTransaction, sendVerification, sendJWT }` are exported by `src/uport/index.js`, and have response listeners pre-configured.  They each take `dispatch` as their only argument, and return functions which actually make the requests.

## Truffle

This boilerplate also ships with Truffle: a framework for easily developing and testing Smart Contracts written in Solidity.  To use the truffle features, first be sure that it is installed globablly with `yarn global add truffle`.  From there, solidity contracts can be compiled and migrated via `truffle compile` and `truffle migrate`, respectively. 

Truffle tests are contained in the `test` directory, and can be written in Solidity or Javascript.  Run these tests with `truffle test`.  Javascript tests using `jest` are also available using `yarn test`.

If your application does not involve (your own) smart contracts, it is safe to remove the `contracts/`, `migrations/`, and `test/` directories, as well as the `truffle*` files in the root directory.