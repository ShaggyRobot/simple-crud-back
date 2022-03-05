### Simple CRUD API using in-memory database.

Installation:
1. Clone or download this repo in to directory of your choice.
2. Install Node.js 16.13.0 or higher.
3. Navigate to project folder.
4. Run"npm install" command to install dependencies.

Usage:
1. To run in development mode, run "npm start:dev"
2. To create and run a bundle, run "npm start:prod"

Server will be listening at http://localhost:3000/.
Port can be changed in ".env" file.

API works with "person" objects, each including name, age and hobbies of a person.
e.g.:
 ```
{
    "name": "Bob",
    "age": 42,
    "hobbies": [ "Breathing", "Existing" ]
}
```
You can work with API by sending requests to /person endpoint (http://localhost:3000/person):

 - GET /person returns all persons.
 - GET /person/${personId} returns person with corresponding ID.
 - POST /person creates new person and stores it in database.
 - PUT /person/${personId} updates record about person with corresponding ID.
 - DELETE /person/${personId} is used to delete record about existing person from database

 To run tests, run "npm test"