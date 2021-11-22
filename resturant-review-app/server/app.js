require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors')

// CUSTOM MIDDLEWARE
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');
const restaurantsRoute = require('./routers/restaurants')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/restaurants', restaurantsRoute)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        app.listen(process.env.PORT, () => console.log(`App is running on port ${process.env.PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()