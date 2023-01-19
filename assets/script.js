$(document).ready(function () {
  //retrieve date and time from moment.js
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  var currentHour = moment().hour();
  console.log(currentHour);

  //color-code time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("data-time"));
    if (blockTime < currentHour) {
      $(this).children("div>textarea").addClass("past");
    } else if (blockTime === currentHour) {
      $(this).children("div>textarea").addClass("present");
    } else {
      $(this).children("div>textarea").addClass("future");
    }
  });

  //store appointments
  $(".saveBtn").on("click", function () {
    var appointments = $(this).siblings("textarea").val();
    console.log(appointments);
    localStorage.setItem("appointment", JSON.stringify(appointments));
  });
});

//show saved appointments

