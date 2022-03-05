let p_hex_code = document.querySelector('.hex_code');
let body = document.querySelector('body');
let btn_click_btn = document.querySelector('.click_btn');

function changeColor() {
  let hex_characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B'
                    , 'C', 'D', 'E', 'F'];
  let hex_color = "#";
  for (var i = 0; i < 6; i++) {
    randomPos = Math.floor(Math.random() * hex_characters.length);
    hex_color += hex_characters[randomPos];
  }

  p_hex_code.innerHTML = "background-color: " + hex_color;
  body.style.backgroundColor = hex_color;
}
