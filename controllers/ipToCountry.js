const axios = require('axios');

async function ipToCountry(ip) {
    return axios
        .get(`http://ip-api.com/json/${ip}?fields=status,message,country,proxy`)
        .then(res => {
            if (res.proxy)
                return false;
            return res.data;
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = ipToCountry;