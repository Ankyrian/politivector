function setLocaleCookie(res, locale) {
    res.cookie("locale", locale, { maxAge: 90000000, httpOnly: true });
}

module.exports = setLocaleCookie;