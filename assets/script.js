$(document).ready(function(){
    //retrieve date and time from moment.js
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().hour();
    //color-code time blocks
   $(".time-block").each (function() {
            var blockTime=parseInt ($(this).attr("data-time"));
            if (blockTime<currentHour){
                $("div>textarea").addClass("past")
            }
            else if (blockTime=currentHour){
                $("div>textarea").addClass("present")
            }
            else {
                $("div>textarea").addClass("future") 
            }
        }) 
        
        //store appointments
        $('.saveBtn').on('click', function () {
            var appointments= $(this).siblings("textarea").val ()
            localStorage.setItem("appointment", appointments)
        })
    })