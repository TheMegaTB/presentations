/**
 * Created by til on 15.05.14.
 */


var twitter = 0;
var skype = 0;
var google = 0;
var mail = 0;

function numberWithCommas(x) {
    x = Math.ceil(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function counter_twitter() {
    twitter = twitter + 70,05;
    $('#twitter').html(numberWithCommas(twitter));
}

function counter_skype() {
    skype = skype + 14,39;
    $('#youtube').html(numberWithCommas(skype));
}

function counter_google() {
    google = google + 439,45;
    $('#google').html(numberWithCommas(google));
}

function counter_mail() {
    mail = mail + 23950,49;
    $('#mail').html(numberWithCommas(mail));
}






window.setInterval(function(){
    counter_twitter();
    counter_skype();
    counter_google();
    counter_mail();
}, 10);