const { StatusCodes } = require('http-status-codes');

const notFound = (req, res) => {
    console.log(req)
    res.status(StatusCodes.NOT_FOUND).send('Route not exist.')
};

module.exports = notFound;