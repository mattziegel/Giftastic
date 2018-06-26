var topics = ["Cat", "Tacos", "Dog", "High Five", "Betty White", "Karate", "Pizza", "Samuel L. Jackson", "Earth", "Columbo", "Football", "Daffy Duck", "Nope", "Banana", "Basketball", "Spacesip", "Shark", "Owl", "Dancing", "Fireworks", "Ice Cream", "Pugs", "Waves", "Math", "Wink", "Wood Turning", "Panda", "Laughing", "Raccoon", "Crying"];
console.log(topics);

$("#buttons").on("click", function() {
  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gif + "&api_key=Gtl8YGKTa0pryKVfcYHYpDP7oD4ek6Hx&&s&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-state");
        $("#gifs").prepend(p);
        $("#gifs").prepend(gifImage);
      }
    });
});

function renderButtons() {
  $("#buttons").empty();
  for (var i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.addClass("gif");
    button.attr("data-name", topics[i]);
    button.text(topics[i]);
    $("#buttons").append(button);
  }
}

$("#add-thing").on("click", function (event) {
  event.preventDefault();
  var thing = $("#thing-input").val().trim();
  if (!thing) { return };
  topics.push(thing);
  renderButtons();
})

renderButtons();