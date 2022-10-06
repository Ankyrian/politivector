const clm = require("country-locale-map"),
    ipToCountry = require("../../controllers/ipToCountry"),
    setLocaleCookie = require("../functions/setLocaleCookie");

async function setLocaleMiddleware(req, res, next) {
    if (!req.cookies.locale) {
        ipToCountry(req.ip)
            .then(countryData => {
                const countryName = countryData["country"];
                const countryLanguage = clm.getCountryByName(countryName)["languages"][0];
                setLocaleCookie(res, countryLanguage);
            })
            .catch(err => console.error("Setting locale middleware failed: " + err));
    }
    console.log("locale set");
    next();
}

module.exports = setLocaleMiddleware;