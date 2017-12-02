var wachtwoorden = ["programming4life","https4life","M@st/123","P@sswoord=123","hELLOworld/123","internationaalstandaardboeknummer/123","MuisMat/123","CoderClass4life","manifest/json","Social-media/123","J@v@$cript4life","Pythoni$cool","PHPiscool","Leren_programmeren","Iedereen_kan_programmeren","Astropi4life","Ruby4life"];
var wachtwoord = document.getElementById('wachtwoord');
var genereer;


function setup() {
    genereer = createButton('genereer wachtwoord');
    genereer.mousePressed(genereer_wachtwoord)
}


function genereer_wachtwoord() {
  var wachtwoorden = ["programming4life","https4life","M@st/123","P@sswoord=123","hELLOworld/123","internationaalstandaardboeknummer/123","MuisMat/123","CoderClass4life","manifest/json","Social-media/123","J@v@$cript4life","Pythoni$cool","PHPiscool","Leren_programmeren","Iedereen_kan_programmeren","Astropi4life","Ruby4life"];
  var wachtwoord = document.getElementById('wachtwoord');

  var random_wachtwoord = Math.floor(Math.random()*wachtwoorden.length);


  wachtwoord.innerHTML = wachtwoorden[random_wachtwoord];




  //console.log('wachtwoord: ', wachtwoorden[random_wachtwoord]);




}
