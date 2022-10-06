const setLocaleCookie = require("../functions/setLocaleCookie");

function localeQueryMiddleware(req, res, next) {
    if (req.query.lang) {
        setLocaleCookie(res, req.query.lang)
    }
    next();
}

module.exports = localeQueryMiddleware;