"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // $.get("/fortune", function (results) {
    //     var fortune = results;
    //     $("#fortune-text").html(fortune);
    // });
    $("#fortune-text").load("/fortune");
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    // var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    var url = "/weather.json?"+$("#weather-form").serialize()

    $.get(url, function (results) {
        $('#weather-info').html(results['forecast']);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    var formInputs = {
        "qty" : $("#qty-field").val(),
        "melon_type" : $("#melon-type-field").val()
    }

    $.post("/order-melons.json", formInputs, function (results){
        $("#order-status").html(results["msg"]);

        if (results["code"] === "ERROR"){
            $("#order-status").addClass("order-error");
        } else {
            $('#order-status').removeClass("order-error");
        }

    });
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


