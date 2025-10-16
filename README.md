## Backend Wizards — Stage 0 Task: Dynamic Profile Endpoint
#### made my Mojiboye Emmanuel (Dynasty)


### Description
_This repository contains the solution for the Stage 0 internship task: building a simple RESTful API endpoint (/me) that returns static user profile information combined with dynamic, real-time data fetched from a third-party API._

### Tools and Techniques
* _Javascript_
* _Node.JS_
* _ExpressJS_

### Core Requirements
_The main objective is to create a GET /me endpoint that returns a JSON response containing:_

1. Static profile data (user).
2. A dynamic UTC timestamp.
3. A random cat fact fetched from the external Cat Facts API (https://catfact.ninja/fact).
4. Graceful error handling for external API failure.

### Prerequisites
This project is built using Node.js and the Express framework. You must have the following software installed on your machine:

1. Node.js (v18 or newer, for built-in fetch support)
2. npm (Node Package Manager)
3. ExpressJS Framework

### Installation Steps
1. Clone the Repository:
```sh
    git clone https://github.com/Emzzy241/Dynamic-Profile.git
    
    cd Dynamic-Profile

```
2. Install Dependencies:

The project relies on packages such as; express for the API framework and cors for handling Cross-Origin Resource Sharing. Run the command below to install all project dependencies already defined in the manifest file

```sh
    npm install
```
* Note: The primary external dependency is the global fetch function, which is available natively in recent Node.js versions.

### Running the Server Locally

To start the API server:

```sh 
    node server.js
    or run the command below to execute one of my already written scripts:
    npm run dev
```



You should see the following output in your console:

Server is running on http://localhost:8000
Test your new endpoint at: http://localhost:8000/me


The server will be accessible at http://localhost:8000.


### Configuration & Environment Variables

This project uses hardcoded constants for user profile data for simplicity, as no secrets or complex configurations are involved.

```sh
    PORT=8000
```

The external API used for data fetching.


#### Endpoint Testing

Here are some the Endpoints:

```sh
GET /me
GET /
GET /test-cats

```


Returns the dynamic profile JSON object.

Test Command (using cURL):

curl http://localhost:8000/me


#### Expected Successful Response Structure (HTTP Status: 200 OK)

The response strictly adheres to the specified JSON schema:

{
  "status": "success",
  "user": {
    "email": "myemail@gmail.com",
    "name": "My Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T17:25:00.123Z",
  "fact": "A cat can jump up to five times its own height." 
}


#### Error Handling

If the external Cat Facts API is unreachable or returns a non-200 status code, the /me endpoint will still return 200 OK to indicate the profile data itself was successfully generated, but the fact field will contain a graceful fallback message:

```sh

{
  "status": "success",
  "user": {
    // ... user profile data ...
  },
  "timestamp": "2025-10-16T17:25:00.123Z",
  "fact": "Cat Fact API unavailable. Please check the network connection." }

```


This approach ensures the primary endpoint is robust and meets the requirement of providing a response structure even during third-party service degradation.

### Contact
Twitter: X.com/EmmanuelMojiboy
Github Username: emzzyoluwole@gmail.com