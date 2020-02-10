module.exports = (type) => (req, res, next) => {
    let time = new Date();
    let utcTime = time.toUTCString();

    console.log(`
    ${req.method}\n
    ${req.url}\n
    ${req.utcTime}\n
    ${req.ip}`)
    next()
}