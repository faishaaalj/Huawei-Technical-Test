
# Huawei Technical Test App
Build with Nodejs & Express.js (Backend), HTML5 CSS3 JavaScript (Frontend), Selenium (Automation Testing).
## Features
- Register User
- Sign In User
- Display User Data
- Logout
## Installation
Clone this repository
```bash
$ git clone https://github.com/faishaaalj/Huawei-Technical-Test.git
```
## Backend
### 1. Install Dependencies
- Go to Backend directory, install dependencies with npm (make sure you have node package manager installed on your local)
```bash
$ cd Backend
```
```bash
$ npm install
```
### 2. Setup Database and Run
- Create your local database (SQL)
- Create `.env` file inside backend directory
- Setup your database configuration on `.env`, the example of database configuration can be seen on `Backend\.env.example`
- After everything has been set, run the backend by running this command on your backend directory
```bash
$ nodemon index
```
## Frontend
- Go to frontend directory and install `http-server` dependency
```bash
$ cd Frontend
```
```bash
$ npm i http-server
```
- Run the frontend app on port `3001`
```bash
$ http-server -p 3001
```
- To open the app, acces this link `http://localhost:3001/`
## Automation Testing
- The purpose of this is to test web page interaction using selenium
- Make sure you have python and chrome WebDriver installed on your local
- Then go to automation directory and install the selenium library
```bash
$ cd Automation
```
```bash
$ pip install selenium
```
- Run the automation testing script
```bash
$ python automation.py
```

