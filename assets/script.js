$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    var blockTime=parseInt ($("#hour-10").attr("data-time"))
    console.log(blockTime)
        //var currentHour = moment().hour();
        /*$(".time-block").each (function() {
            var blockTime=parseInt ($(this.attr("data-time"));
            console.log(blockTime)
            /*if (blockTime<currentHour){
                //$(this>textarea).addClass("past")
            })*/     
        
    })