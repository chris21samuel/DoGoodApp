const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const os = require("os");
const morgan = require("morgan");
const config = require("./config/db");
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');



app.use(express.static('public/dist/'));


global.Camp = require('./api/models/dogoodModel');
global.Adv = require('./api/models/advertisement');
const routes = require('./api/routes/dogoodRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.use(cors());
app.use(express.static('public'))
app.use(formData.parse({uploadDir: __dirname+'/public/images'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
});
const userRoutes = require("./api/routes/dogoodRoutes"); 
app.use("/user", userRoutes);


app.listen(port);


console.log(`Server started on port ${port}`);
