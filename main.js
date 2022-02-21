

function verify() {
    var randomNumber = 2000249;
    var yourGuess = document.getElementById("guess");

    if (yourGuess.value == randomNumber) {
      document.getElementById("prompt").innerHTML = "That is correct!";
      document.getElementById("verified").style.visibility = "visible";
      alert("Sucess Loging In");
    } else {
      document.getElementById("prompt").innerHTML = "That was not correct. Please contact Milo Parsons for a reminder";
      document.getElementById("verified").style.visibility = "hidden";
    }

  }


  let input = document.getElementById('guess');

  input.addEventListener('keydown', (e) => {
      if(ez.key === 13) {
          verify();
      }
  });

    var num1 = keyboard(17),
        num2 = keyboard(50),
        num3 = keyboard(51),
        num4 = keyboard(52);

    num1.press = function() { verify() };

    window.addEventListener("keydown", checkKey);

    function checkKey(ev) {
      if (ev.keyCode == 13) { console.log('enter key pressed')}; // 1
    }