function setLocaleCookie(res, locale) {
    res.cookie("locale", req.query.lang, { maxAge: 90000000, httpOnly: true });
}

module.exports = setLocaleCookie;