const winston = require('winston');

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console({
			level: 'info',
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
		new winston.transports.File({
			filename: 'error.log',
			level: 'error',
		}),
	],
});

module.exports = { logger };
