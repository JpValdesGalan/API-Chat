const express = require('express');
const path = require('path');
const Database = require('./src/core/database')
const dotenv = require('dotenv');

dotenv.config();

// Init app
const app = express();
const port = process.env.PORT || 3000;

// Route middlewares
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Set main endpoint
app.use('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src', 'index.html');
    res.sendFile(indexPath);
});

Database.connect().then(() => {
    // Listen Port
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});

//Swagger config
const swaggerOptions = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'ITESO Chat API',
            description: 'A live chat web application',
            version: '1.0.0',
            servers: ['http://localhost:' + port]
        }
    },
    apis: ['./src/modules/user/user.routes.js']
}

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));