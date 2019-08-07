function refresh(){
  var number_1 = generate_random_number();
  var number_2 = generate_random_number();
  change_two_imgs(number_1,number_2);
  change_title_content(number_1,number_2);
}

function change_title_content(number_1,number_2){
  var title = "";
  if (number_1 === number_2){
    title = "Draw!";
  }
  else if (number_1 > number_2){
    title = "🚩 left wins!";
  }
  else {
    title = "right wins! 🚩";
  }

  document.querySelector(".result").innerHTML = title;
}

function change_two_imgs(number_1,number_2){
  var src_prefix = 'images/dice';
  var src_1 = src_prefix + String(number_1) + '.png';
  var src_2 = src_prefix + String(number_2) + '.png';
  console.log(src_1,src_2);
  document.querySelector('.img1').setAttribute('src',src_1);
  document.querySelector('.img2').setAttribute('src',src_2);
}

function generate_random_number(){
  var ret = Math.random()*6;
  return Math.floor(ret) + 1;

}
