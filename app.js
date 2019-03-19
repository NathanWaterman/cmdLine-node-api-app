const axios = require('axios');

//api url and key
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = 'c93ba2f2d412b9d70742f1af08a7cbfe';

//hard coded zip code and country code
const LOCATION_ZIP_CODE = '90001';
const COUNTRY_CODE = 'us';

//template literal to concat each variable
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;

//request url from axois
axios.get(ENTIRE_API_URL)
    .then(response => {
        //console.log(response.data.main.temp)

        //get current temperature city country from response
        const kelvinTemp = response.data.main.temp;
        const cityName = response.data.name;
        const countryName = response.data.sys.country;

        //making K to F and K to C conversions
        const fahrenheitTemp = (kelvinTemp * 9/5) - 459.67;
        const celciusTemp = kelvinTemp - 273.15

        console.log(celciusTemp);

        const msg = ` 
            Right Now, in \
            ${cityName}, ${countryName} the current temperature \
            ${fahrenheitTemp.toFixed(2)} deg F or \
            ${celciusTemp.toFixed(2)} deg C.`.replace(/\s+/g, ' ')

        console.log(msg);

    })
    .catch(error => console.log('Error', error));
