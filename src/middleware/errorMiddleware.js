export const errorMiddleware = (err, req, res, next) => {
    // console.log(err.message)
return res.json({
    status : false,
    message : err.message
})
}