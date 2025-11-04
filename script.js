function calculateLove() {
  var name1 = document.getElementById("name1").value.trim();
  var name2 = document.getElementById("name2").value.trim();
  var result = document.getElementById("result");

  if (name1 === "" || name2 === "") {
    result.innerText = "Please enter both names 💔";
    return;
  }

  // Fun pseudo-random compatibility formula
  var loveScore = Math.floor(Math.random() * 101); // 0 to 100

  // Cute messages based on score
  var message = "";
  if (loveScore > 80) {
    message = "💞 Wow! You are a perfect match!";
  } else if (loveScore > 50) {
    message = "💖 There’s definitely potential here!";
  } else if (loveScore > 30) {
    message = "💘 Maybe give it some time...";
  } else {
    message = "💔 Hmm... better stay friends!";
  }

  result.innerText = `${name1} ❤️ ${name2} = ${loveScore}% compatibility\n${message}`;
}
