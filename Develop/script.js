$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function () {
    //console.log("nside save btn click");
    var note = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time);

    localStorage.setItem(time, note);
  });

  function colotTimeSlot() {
    var cHour = moment().hours();
    console.log(cHour);

    $(".time-block").each(function () {
      var bHour = parseInt($(this).attr("id").split("-")[1]);

      if (bHour < cHour) {
        $(this).addClass("past");
      } else if (bHour === cHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past, present");
        $(this).addClass("future");
      }
    });
  }
  colotTimeSlot();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
});
