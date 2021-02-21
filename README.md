# XMeme

A Meme Stream Page where users can post memes by providing their name, a caption for the meme and the URL for the meme image as input. It retrieves upto 100 latest memes from the database and displays to the user

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

execute 
```
$ git clone https://gitlab.crio.do/COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/anikashchakraborty-me_buildout_xmeme.git 

$ cd anikashchakraborty-me_buildout_xmeme 
```

### Prerequisites

What things you need

```
NodeJs
MongoDB
```

### Installing

A step by step series of examples that tell you how to get a development env running

(Refer deployment section for possible errors and handling them)

#### To install mongoDB, NodeJs and fire up the server (Ubuntu)

```
$ chmod +x test_server.sh

$ sudo ./test_server.sh

# the server will start on port 8081
```

#### To run the server


```
$ cd server

$ chmod +x install.sh

$ sudo ./install.sh

$ chmod +x server_run.sh

$ ./server_run.sh &

# the sleep timer is 60 seconds so please wait for 60 seconds

$ chmod +x sleep.sh

$ ./sleep.sh


```

#### To run the client

```
$ cd client

$ npm start

# the client will run on port 3000
```


## Deployment

Run the curl commands after the server is fired up.

If ever your installation pauses. press Ctrl+C and then again run ./sudo test_server.sh

Use SWAGGER-UI for testing the APIs

```
http://localhost:8081/swagger-ui/
```

Please wait for 60 seconds after the message 
```
App is running in development mode on port 8081
Database connected : 127.0.0.1
```
The server doesn't stop once running so you can execute CURL commands given below

## CURL command examples to test the server

```
$ curl -X GET "http://localhost:8081/memes/" -H  "accept: */*"
```
Returns empty array

```
$ curl -X POST "http://localhost:8081/memes/" -H  "accept: */*" -H  "Content-Type: application/json" -d "{\"name\":\"Anikash\",\"caption\":\"The funniest meme\",\"url\":\"https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/img_9685.jpg\"}"
```
returns entered meme object

```
$ curl -X GET "http://localhost:8081/memes/" -H  "accept: */*"
```
returns updated meme array

## Built With

* [NodeJs](https://nodejs.org/en/) - For Backend
* [ReactJs](https://reactjs.org/) - For frontend framework
* [Swagger](https://swagger.io/) - API Development and testing


## Authors

* **Anikash Chakraborty** - *Xmeme* - [Anikash Chakraborty](https://github.com/anikashchakraborty)



## Acknowledgments

* Hat tip to anyone whose code was used
* Crio

