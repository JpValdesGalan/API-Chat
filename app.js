const express = require('express');
const path = require('path');
const Database = require('./src/core/database.js');
const dotenv = require('dotenv');

dotenv.config();

//Load Routes
const apiRoutes = require('./src/routes/api.js');

//Init App
const app = express();
const port = process.env.PORT || 3000;

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
    apis: [ './src/modules/user/user.routes.js',
            './src/modules/channel/channel.routes.js', 
            './src/modules/message/message.routes.js']
}

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Use Route middlewares
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

//Set main endpoint
app.use('/', (req, res) => {
    const indexPath = path.join(__dirname, 'src', 'index.html');
    res.sendFile(indexPath);
});

//Connect to database
Database.connect().then(() => {
    // Listen Port
    app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});
