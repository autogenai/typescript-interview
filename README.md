# Autogen Typescript Interview
This project is a really simple version of our production tech stack.
It has:
- frontend: a React SPA
- backend: a NestJS API & SQLite database
- stub-third-parties: a couple of node + express servers that act as fake external APIs

You should be able to spin up those fake external APIs using docker-compose.
And then the NestJS API & the React SPA can be run directly in node.

## Pre-requisites
- docker (and docker-compose)
- node (any fairly recent version should be fine)

## Setup
### External APIs
From the root of this repo, run:
```bash
docker-compose up
```

This will spin up both external servers, on ports 3001 and 3002.

### Nest & React
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
From inside the `autogen` directory, run:
```bash
npm run test
```

### Calling the API
Inside the `autogen/rest` directory, you should find a collection of sample requests.
These should be callable from inside most IDEs:
- [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- [Jetbrains Documentation](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html)

Alternatively, you could use the information in those files to call the API using curl or Postman.