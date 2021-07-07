const currenttime = +moment().format("H");

const today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));



$(".container").each(function () { 
    const time = $(this).attr("id").split("-").pop();
 
    if (currenttime == time) {
        $(this).addClass("present");
    } else if (currenttime < time) {
        $(this).addClass("future");
    } else {
        $(this).addClass("past");
    };

});


$(".saveBtn").click (function () {

    // var that holds a unique key for each btn
    const key = $(this).parent().parent().attr("id");
    
    // var that holds the value for the btn clicked
    const value = $(this).parent().find("textarea").val();
    
    localStorage.setItem(key,value);

    
});

window.onload = function() {

    const timeblock = $(".container")
  for (let i = 0; i < timeblock.length; i++) {
      const element = timeblock[i].getAttribute("id");
      const localValue = localStorage.getItem(element);
    const textArea = timeblock[i].children[0].children[1];
    textArea.value = localValue
      
  }
 
};

