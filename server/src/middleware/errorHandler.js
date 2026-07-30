// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
  console.error("[error]", err);

  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || "Something went wrong. Please try again later.",
  });
};

export const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
};

export default errorHandler;
