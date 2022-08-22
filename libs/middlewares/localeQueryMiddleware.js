function localeQueryMiddleware(req, res, next) {
    if (req.query.lang) {
        res.cookie("locale", req.query.lang, { maxAge: 90000000, httpOnly: true });
    }
    next();
}

module.exports = localeQueryMiddleware;