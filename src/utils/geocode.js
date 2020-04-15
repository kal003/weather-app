const request = require('request')

const geocode = (address, callback) => {
    const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoia2FsMDAzIiwiYSI6ImNrOHcwZGF6ZDBoZzYzZmxkdDQ1Z2drOTcifQ.pKYsoHYO09sbswJDX3JNug&limit=1"

    request({ url: geocodeurl, json: true} , (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find specified location, Please try again', undefined)
        }  else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
} 

module.exports = geocode