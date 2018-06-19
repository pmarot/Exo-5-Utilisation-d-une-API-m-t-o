

$.ajax({
    type: "GET",
    url: "http://localhost:3005/meteo",
    type: "json",
    context: document.body
}).success(function (data) {
    console.log(data)
    console.log("salut")
    // $("#meteo").append(data);
});

