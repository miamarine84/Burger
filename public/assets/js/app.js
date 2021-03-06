$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const burgerValue = $('#br').val().trim();

    if (burgerValue) {
      const newBurger = {
        burger_name: $('#br')
          .val()
          .trim(),
        devoured: 0,
      };

      // Send the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(function () {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });



  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$("#updateBurger").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  // Get the ID by finding an element with a "name" attribute equal to the string "id"
  const id = $("[name=id]").val().trim();

  const updatedBurger = {
    name: $("#updateBurger [name=updateBurger]").val().trim(),
  };

  // Send the PUT request.
  $.ajax("/api/update/burgers/" + id, {
    type: "PUT",
    data: updatedBurger,
  }).then(function () {
    console.log("updated id ", id);
    // Reload the page to get the updated list
    location.reload();
  });
});