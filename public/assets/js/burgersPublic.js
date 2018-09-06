$(function() {
  $(".btn-success").on("click", function(event) {
      // console.log("clicked BT buton");
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: true
    };

    //Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        //console.log("changed burger to", newDevouredState);
        //Display Updated lists
        location.reload();
      }
    );
  });
});
$(function() {
  $(".btn-primary").on("click", function(event) {
    
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bName").val().trim(),
        devoured: false
      };
  
      //Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          //Display Updated Lists
          location.reload();
        }
      );
    });

  })
});