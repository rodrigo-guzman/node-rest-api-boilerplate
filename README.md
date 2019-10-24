# node-rest-api-boilerplate

👋 Hi, this program was carried out for the Node.js course exam.

## Desctription
It is separated into three layers: application, domain and infrastructure.

In the Infrastructure layer, the service call for the exam is executed:
https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users

In the domain layer, create the model to validate it through the 'Joi' scheme, but do not use it finally.

In the application layer, develop the controller you call the rotation. In it the method of the Infrastructure layer is instantiated, passing the url as a parameter.
For the same I tried to take the value through a configuration file, but I did not get it. That's why it's set directly on the controller

## Functionality
Functionality: Get a list of active users

The service gets all active users sorted by last name. The time for the requirement to add age is not enough.

## Test
For the service, add a test case in the Test folder, in the users.test.js file.

## Libraries
The libraries used are: "@hapi/joi": ","chai-http": ","dotenv","express","morgan","node-fetch","nodemon","chai","mocha"