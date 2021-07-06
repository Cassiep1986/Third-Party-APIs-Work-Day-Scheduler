const currenttime = +moment().format("H");

const today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));



$(".container").each(function () { 
    const time = $(this).attr("id").split("-").pop();
 
    if (currenttime === time) {
        $(this).addClass("present");
    } else if (currenttime < time) {
        $(this).addClass("future");
    } else {
        $(this).addClass("past");
    };

});
window.onbeforeunload = function() {
    localStorage.setItem(keep, $('.description').val());
};

window.onload = function() {

    localStorage.getItem(".description").val;
 
};

$(".saveBtn").click (function () {
    localStorage.keep = $('.description').val();

});


