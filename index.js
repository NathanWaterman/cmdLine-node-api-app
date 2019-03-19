const axios = require('axios');

//api url and key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = 'c93ba2f2d412b9d70742f1af08a7cbfe';

//hard coded zip code and country code
const LOCATION_ZIP_CODE = '90001';
const COUNTRY_CODE = 'us';

//template literal to concat each variable
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;

//request url from axois
axios.get(ENTIRE_API_URL)
    .then(response => console.log(response.data))
    .catch(error => console.log('Error', error));
