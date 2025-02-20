const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//connect to db
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// testing connection
sequelize
.authenticate()
.then(() => {
    console.log('Connected to the database');
})
.catch(err => {
    console.error('Unable to connect to the database', err);
});

const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);
app.use('admin/article', articleRouter)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});