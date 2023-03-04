const notFound = (req, res, next) => {
    const error = new Error(`Not Found -${req.url}`)
    res.status(404);
    next(error)
}
//why it was used i to dont know the above error will be displayed here
const errorHandler = (err,req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message:err.message,
        welcome:"Hi welcome to my website !Thank you for visit.....",
        statusCode:statusCode
    })
}
module.exports ={notFound,errorHandler}