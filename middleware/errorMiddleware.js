const errorMiddleware = (err, req, res, next) => {
    // Determine the status code. If no status code is set, default to 500 (Internal Server Error).
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Log the error for debugging purposes (optional).
    console.error(err);

    // Send a JSON response with the error message and the determined status code.
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
};

module.exports = errorMiddleware;
