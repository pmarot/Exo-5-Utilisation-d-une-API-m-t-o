const express = require('express')
const app = express()
var request = require('request');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})


app.get('/reunion', function (req, res) {
    var apiKey = "bd71f2631d911d0a9ea543c6e6f7b254";
    var city = "Reunion";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            res.send(response)
        }

    });

})



app.get('/paris', function (req, res) {
    var apiKey = "bd71f2631d911d0a9ea543c6e6f7b254";
    var city = "Paris";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            res.send(response)
        }

    });

})


app.get('/marseille', function (req, res) {
    var apiKey = "bd71f2631d911d0a9ea543c6e6f7b254";
    var city = "Marseille";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            res.send(response)
        }

    });

})

app.get('/moscou', function (req, res) {
    var apiKey = "bd71f2631d911d0a9ea543c6e6f7b254";
    var city = "Moscou";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            res.send(response)
        }

    });

})

app.listen(3005)

