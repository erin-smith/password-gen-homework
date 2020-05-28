var allChars = [
  { char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    name: "Special Characters",
    use: false },
  { char: "0123456789",
    name: "Numbers",
    use: false },
  { char: "abcdefghijklmnopqrstuvwxyz",
    name: "Lowercase Letters",
    use: false },
  { char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    name: "Uppercase Letters",
    use: false},
]
var pwdChars = "";
let password = "";

//GREETING
alert("Welcome to Magic Password Generator!"); 
alert ("Follow steps 1 and 2 to Create a Password.");
//Set default setting on slider toggle
document.getElementById("dlen").innerHTML = "Length: 50"; 
//function to move slider number
document.getElementById("slider").oninput = function() {
  if(document.getElementById("slider").value > 0){
    document.getElementById("dlen").innerHTML = "Length: " + document.getElementById("slider").value; //pwdlength
  }
  else { 
    document.getElementById("length").innerHTML = "Length: 8";
  }
}
// Press submit length button to prompt user
document.getElementById("chars").addEventListener("click", askUser);
    function askUser () {
        confirm ("There will be 4 Questions. Please type 'yes' to one or more:")
      allChars.forEach(set => {
        var useChar = (prompt(`Do you want to use ${set.name}?`)) 
        if (useChar === "yes" || useChar === "y") {
           useChar.toLowerCase;
            set.use = true;
        }
        if(set.use){
            pwdChars = pwdChars + set.char;
        }
      });
    JSON.stringify(allChars);
    if (pwdChars !== "") {
    alert("Please click Generate Password");
    }
  else { alert("Error. Please refresh page and answer questions carefully")};
    document.getElementById("generate").addEventListener("click", generatePassword);
      function generatePassword() {
     let plength = document.getElementById("slider").value; 
        for (var i = 0; i < plength; i++) {
          password = password + pwdChars.charAt(Math.floor(Math.random() * Math.floor(pwdChars.length)));
           document.getElementById("display").innerHTML = password;

        }
      } 
    }
