const { PORT, API_ROUTES } = require('./constants');
const express = require('express');
const setupMiddleware = require('./utils/middleware');
const { playerRouter } = require('./routers');

const app = express();
setupMiddleware(app);

app.use('/api/players', playerRouter);

const startServer = async () => {
    try {
        // database
        app.listen(PORT, () => {
            console.log(`Application is running on port ${PORT}`)
        } )
    } catch (error) {
        console.error(error);
    }
}

module.exports = startServer;

