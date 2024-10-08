const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.BAD_REQUEST:
            res.status(statusCode).json({
                title: "Bad Request",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.status(statusCode).json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        default:
            console.log("No error , All Good!");
            res.status(statusCode).json({
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
    };
};
module.exports = errorHandler;