$("body").keypress( function (event) {
  var character = event.key;
  console.log(character);
  $("h1").text(character);
});

$("h1").on("mouseover",function() {
	$("h1").css("color","purple");
});
