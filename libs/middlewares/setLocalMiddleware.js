const clm = require("country-locale-map"),
    ipToCountry = require("../../controllers/ipToCountry"),
    setLocaleCookie = require("../functions/setLocaleCookie");

function setLocaleMiddleware(req, res, next) {
    if (!req.cookies.locale) {
        const countryName = ipToCountry(req.ip);
        setLocaleCookie(res, clm.getCountryByName(countryName)[languages][0]);
    }
    next();
}

module.exports = setLocaleMiddleware;