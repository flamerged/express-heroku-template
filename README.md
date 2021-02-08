# Boilerplate setup for Express.js server with babel for use on Heroku

This is a minimal setup for an express server. Babel is also included as dev dependency for easier development. For deployment on Heroku the build command needs to be run first before pushing to the heroku repo.

## Setup

1. Run *yarn install*
2. Run *yarn dev* if you want to use nodemon during development OR Run *yarn start* if you just want to run the server, without nodemon.

## Use on Heroku

The Procfile contains the command to run the server from the build folder (*yarn start-server*). It's therefore important that you build before you deploy.

1. *yarn build*
2. *git push heroku master*

