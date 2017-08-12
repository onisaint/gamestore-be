# GameStore
## Development server
Run `node app.js` on root directory. Navigate to `http://localhost:7777/`.
Note : except ROOT/test no other routes are accessed withot token

## checkpoints
  1.  List 5 games for sale on the website [done]
  2.  Dummy checkout functionality [done]
  3.  Authentication [done using static token on fe and jwt on backend(implementation)]
  4.  Enlist cart products [done]
  5.  Use dummy gateway and process one order. [~done]
  6.  Store the transaction data in postgres/mysql for future reference. [I use MongoDB + i didn't have the setup time, will skip for now]
  7.  Generate a pdf invoice copy of above processed order and save it on local device [done / will get stored on ./orders/]
  
# TechStack
  Node, motlin, Angular 4 and some of the tools enlisted in package.json
  
Assumptions:
  since the use of client dummy the clinet is constant and the cart is managed with cart, logins and preference management (session and cookies) are not handeled
  As of time limitiation standard key checks are skipped (ie, if all the required fields are presend) and assuming there are no breakage and no intercepter used.
