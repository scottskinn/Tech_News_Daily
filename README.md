# Tech_News_Daily

![Github badge](https://img.shields.io/badge/Github-scottskinn-blue.svg)

## Description

This is a Tech Blog that is built with [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [Sequelize](https://sequelize.org/), [Handlebars](https://handlebarsjs.com/), [bcrypt](https://www.npmjs.com/package/bcrypt), [dotenv](https://www.npmjs.com/package/dotenv), and follows [Object Relational Mapping](https://sequelize.org/master/class/Sequelize.html#static-method-define) and [Model View Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) methods.

This application allows users to login, create an account, and create a blog post. Users can also view all blog posts, and edit or delete their own blog posts. User are also to up-vote any post they like.

## Built With

- MySQL2
- Sequelize
- Express
- Handlebars
- bcrypt
- dotenv
- Object Relational Mapping
- Model View Controller

## Installation

For you to be able to start the server from your computer, run these steps in your command line from the root folder of the project:

```text
1. npm install
2. npm start
```

You will need to create a .env file in the root folder of the project. This file will contain your database connection information.

- DB_NAME='tech_news_daily_db'
- DB_USER='root'
- DB_PW='Enter MySQL password here!'
- DB_SS='SuperSecret'

Once you have the server running, you can access it from your browser by going to <http://localhost:3002/>
Then you can login and create an account. You can also create a blog post.

## Deployed Site

```url
    https://peaceful-sea-18150.herokuapp.com/
```

## License

![Github license](https://img.shields.io/badge/licence-MIT-blue.svg)
