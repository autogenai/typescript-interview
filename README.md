# Autogen Typescript Interview
This project is a really simple version of our production tech stack.
It has:
- frontend: a React SPA
- backend: a NestJS API & SQLite database

## Pre-requisites
- node (any fairly recent version should be fine)
- (optional) a REST client for running `.rest` files - just an easy way to call the API.
    - see [Calling the API](#calling-the-api)

## Setup
From the root of this repo, run the `setup.sh` script.
This will install dependencies and setup the SQLite database.

To run the the nest app and the react app respecitively, run
```bash
npm run dev --prefix ./backend
npm run dev --prefix ./frontend
```

You should now see the react app running on port 3001, and the nest app running on port 3000.

## Checking it works
Everything should now 'just work'... but just to make sure, you can check the following:

### Running the tests
TODO - add some useful tests.

### Calling the API
Inside the `autogen/rest` directory, you should find a collection of sample requests.
These should be callable from inside most IDEs:
- [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Jetbrains Documentation](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html)

Alternatively, you could use the information in those files to call the API using curl or Postman.