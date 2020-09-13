const allChars = [{
    char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    name: "Special Characters",
    use: false
  },
  {
    char: "0123456789",
    name: "Numbers",
    use: false
  },
  {
    char: "abcdefghijklmnopqrstuvwxyz",
    name: "Lowercase Letters",
    use: false
  },
  {
    char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    name: "Uppercase Letters",
    use: false
  },
]
const minLength = 8;
let pwdChars = "";

//GREETING
alert("Welcome to Magic Password Generator!");
alert("Follow steps 1 and 2 to Create a Password.");

function updateLength(pwdLength){
  document.getElementById("dlen").innerHTML = "Length: " + pwdLength;
}

// align text with slider value
updateLength(document.getElementById("slider").value);

// Press submit length button to prompt user

function askUser() {
  confirm("There will be 4 Questions. Please type 'yes' to one or more:")
  allChars.forEach(set => {
    const useChar = (prompt(`Do you want to use ${set.name}?`))
    if (useChar === "yes" || useChar === "y") {
      pwdChars = pwdChars + set.char;
    }
  });

  if (pwdChars !== "") {
    alert("Please click Generate Password");
  } else {
    alert("Error. Please refresh page and answer questions carefully")
  };
}

function getRandomUpTo(max){
  return Math.floor(Math.random() * max);
}

function generatePassword() {
  let password = "";
  let plength = document.getElementById("slider").value;
  for (let i = 0; i < plength; i++) {
    password = password + pwdChars.charAt(getRandomUpTo(pwdChars.length));
  }
  //console.log(`(${password.length}) ${password}`);
  document.getElementById("display").innerText = password;
}

//function to move slider number
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > minLength) {
    updateLength(document.getElementById("slider").value);
  } else {
    updateLength(minLength);
  }
}

document.getElementById("chars").addEventListener("click", askUser);
document.getElementById("generate").addEventListener("click", generatePassword);