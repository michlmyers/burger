$(function() {


    $(".cook").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#cookedName").val().trim(),
          sleepy: $("[name=devoured]:checked").val().trim()
        };

            // Send the POST request.
    $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });



});