import winston from 'winston';

//figure out what this does lmao
const logger = winston.creatLogger({
    level: 'info', //change to error, warn, debug?
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
),
//add definition to README.md
transports: [
    new winston.transports.Console(),

//will need this later once implemented
//Add to README.md
//new winston.transport.File({ filename: 'logs/app.log' })
        ]
    }
);
//makes the logger object usable in other parts of the application
export default logger;