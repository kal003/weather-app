const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + encodeURIComponent(latitude)  + "&lon=" + encodeURIComponent(longitude) + "&APPID=717b0b9b7194a653ab1472f2796f7a78&units=metric"

    request({url: url, json: true}, (error, { body }) => {
        if(error) {
            callback('No Internet Connection', undefined)
        } else if (body.message) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined , 'It is currently ' + body.main.temp + ' C. The high today is ' + body.main.temp_max + ' C with a low of ' + body.main.temp_min + ' C')
        }
    })
}

module.exports = forecast;