export const successResponse = (res, statusCode, status, message, data = {}, token ) => {
  return res.status(statusCode).json({
    status,
    message,
    data ,
    token
  });
};
