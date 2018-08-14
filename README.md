# Random-API-Response-Server

This small Javascript app has been created to return specified http codes after a random time

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Docker or Node

### Installing

#### Docker

From any directory to run the application from Dockerhub use:
```
docker container run --rm -p 5000:8080 williamsault/random-api-response-server
```
or to run from the this folder run the following adding your own container name
```
docker build -t {containerName} .
docker run --rm -p 5000:8080 {containerName}
```

#### Node

Open the directory in a terminal and run:
```
npm install
```
You can then start the server with (on port 8080):
```
node server.js
```
### Using the API

The most common request is the random time:

```
http://{HOST}:{PORT}/code/{code}/random/time-range/[minTime]-{maxTime}
```

For Example, if you needed a 200 within a time between 60 to 180 seconds you would call:
```
http://localhost:8080/code/200/random/time-range/60-180
```
For more information please see the server.js file