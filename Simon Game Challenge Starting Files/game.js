var button_colors = ["red", "blue", "green", "yellow"];

var game_pattern = [];
var user_chosen_colors = [];
var level = 0;

if (level === 0) {
  $(document).keypress(function() {
    $("h1").text("level 0");
    next_sequence();
  });
}


// add click event listener
$(".btn").click(function(event) {
  var user_clicked_color = event.target.id;
  user_chosen_colors.push(user_clicked_color);
  audio_button(user_clicked_color);
  animate_press(user_clicked_color);
  check_answer(user_clicked_color);
});

function check_answer(current_color) {
  number_of_color = user_chosen_colors.length;
  // user's input matches
  if (current_color === game_pattern[number_of_color - 1]) {
    // enter the next level
    if (game_pattern.length === user_chosen_colors.length) {
      // reset user input
      user_chosen_colors = [];
      // generate the next color
      next_sequence();
    }
  }
  // don't match
  else {
    // exit and reset everything
    wrong_guessing();
  }
}

function wrong_guessing() {
  // giving some feed back tell user he got a wrong anser
  console.log("wrong answer");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Press A Key to Start");
  // reset everything
  game_pattern = [];
  user_chosen_colors = [];
  level = 0;

}

function next_sequence() {
  level++;
  $("h1").text("level " + level);
  var last_color = generate_random_color();
  setTimeout(function() {
    animate_button(last_color);
    audio_button(last_color);
  }, 600);
}

function generate_random_number() {
  var number = Math.floor(Math.random() * 4);
  return number;
}

function generate_random_color() {
  var color = button_colors[generate_random_number()];
  game_pattern.push(color);
  return color;
}

function animate_button(color) {
  var id_color = "#" + color;
  $(id_color).fadeOut(100).fadeIn(100);
}

function animate_press(color) {
  var id_color = "#" + color;
  $(id_color).addClass("pressed");
  setTimeout(function() {
    $(id_color).removeClass("pressed");
  }, 100);

}

// input the string of specific color -> "red" / "green"
function audio_button(color) {
  var path = "sounds/" + color + ".mp3";
  var audio = new Audio(path);
  audio.play();
}
