/**
 * Created by til on 15.05.14.
 */


var twitter = 0;
var youtube = 0;
var facebook = 0;
var mail = 0;

function numberWithCommas(x) {
    x = Math.ceil(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function counter_twitter() {
    twitter = twitter + 73.97;
    $('#twitter').html(numberWithCommas(twitter));
}

function counter_youtube() {
    youtube = youtube + 1346.33;
    $('#youtube').html(numberWithCommas(youtube));
}

function counter_facebook() {
    facebook = facebook + 41666.67;
    $('#facebook').html(numberWithCommas(facebook));
}

function counter_mail() {
    mail = mail + 25365.67;
    $('#mail').html(numberWithCommas(mail));
}


window.setInterval(function () {
    counter_twitter();
    counter_youtube();
    counter_facebook();
    counter_mail();
}, 10);