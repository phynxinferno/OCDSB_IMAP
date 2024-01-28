const net = require('net');
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/' + new Date().getTime() + '.log' })
    ],
    format: winston.format.cli()
});

const config = require('./config.json');

if(config.enableSecurityWarnings) logger.warn('The server does not implement authentication and should therefore not be exposed to the internet or another untrusted network. See config.json to disable this message.');
