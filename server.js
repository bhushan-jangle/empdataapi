require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('_helpers/error-handler');
var routes = require('./routes/index');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var routes = require('./routes/index');


// api routes
app.use('/users', require('./users/users.controller'));
app.use('/api', routes);
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
