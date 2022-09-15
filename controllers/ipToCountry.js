const axios = require('axios');

async function ipToCountry(ip) {
    axios
        .get(`http://ip-api.com/json/${ip}?fields=status,message,country,proxy`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = ipToCountry;