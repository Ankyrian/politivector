const axios = require('axios');

async function ipToCountry(ip) {
    return axios
        .get(`http://ip-api.com/json/5.46.76.183?fields=status,message,country,proxy`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = ipToCountry;