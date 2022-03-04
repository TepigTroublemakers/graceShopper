# PotStop

PotStop is a one-stop shop for your houseplant's next home.

## Setup

* `npm install`
* Create two postgres databases:

```
createdb pot-stop
createdb pot-stop-test
```

* By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

## Resources

- [Deployed App (Heroku)](https://pot-stop.herokuapp.com/pots)
- [Google Drive](https://drive.google.com/drive/u/0/folders/1Nz5UA9kb8UkjN5oHXTRXtVgce6fdLkXr)
