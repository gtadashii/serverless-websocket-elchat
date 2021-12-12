# El chat with webscoket using the serverless framework
This project was inspired by my university project called 'El Chat' wich consist of a real time chat application, the original was desing with lambda functions.
## How to use
* To start the project first you will need to run the `yarn` command to add all dependecies.
* Then run `sls deploy` to deploy the application.
* You can test it locally using the `sls offline` command.
* To send a message you need to send an object as the example bellow:
  ```json
  {
    "message": "This is a message example",
    "action": "message"
  }
  ```