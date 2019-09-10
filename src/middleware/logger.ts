
import * as winston from 'winston'
import * as expressWinston from 'express-winston'

const { LOG_DIR, LOG_FILE_NAME } = process.env

// TODO: add this before commit.
// const winstonTransports = process.env.NODE_ENV === 'production'
//   ? [ new winston.transports.File({ dirname: LOG_DIR, filename: LOG_FILE_NAME }) ]
//   : [
//     new winston.transports.Console(),
//     new winston.transports.File({ dirname: LOG_DIR, filename: LOG_FILE_NAME })
//   ]

const logger = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ dirname: LOG_DIR, filename: LOG_FILE_NAME })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorize: false
})

export default logger
