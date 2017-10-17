$(document).ready(function() {
  // call functions here
  addTask();
});

// define functions here
function addTask() {
  $("form").on("submit", function(ev) {
    var task = $("#item").val();
    $("ol").append("<li>" + task + "</li>");

    ev.preventDefault();
  });
}
