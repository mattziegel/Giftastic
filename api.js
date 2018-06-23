
var aweThings = ["Earth", "Cats", "Dogs", "Samuel L. Jackson"];

function alertMovieName() {
    alert($(this).attr("data-name"));
  }

  // Function for displaying movie data
  function renderButtons() {

    // stops creation of repeat buttons
    $("#buttons-view").empty();

    // Looping through the array of things
    for (var i = 0; i < aweThings.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("thing");
      // Added a data-attribute
      a.attr("data-name", aweThings[i]);
      // Provided the initial button text
      a.text(aweThings[i]);
      // Added the button to the HTML
      $("#buttons-view").append(a);
    }
  }

  $("#add-movie").on("click", function(event) {

    // Prevents the submit button from trying to submit the form
    event.preventDefault();

    // Here we grab the text from the input box
    var thing = $("#awesome-input").val();

    // Here we construct our URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    thing + "&api_key=dc6zaTOxFJmzC&limit=10";;

    // AJAX call and display it in the div with an id of movie-view
    $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
        console.log(resonse);
        var imageUrl = response.data.image_original_url;
        var aweImage = $("<img>");
        aweImage.attr("src", imageUrl);
        aweImage.attr("alt", "cat image");
        $("#awesome-view").prepend(aweImage);
     })

     $(document).on("click", ".thing", alertMovieName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

    //pauses or animates gifs
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 
      
      else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

    });