
//variables
var textBlue = document.getElementById("paragraph1");
var textRed = document.getElementById("paragraph2");
var slider1 = document.getElementById("box1");
var slider2 = document.getElementById("box2");
var slider3 = document.getElementById("box3");

//styling
textBlue.style.fontSize = "18px";
textBlue.style.color = "Blue";
textRed.style.fontSize = "18px";
textRed.style.color = "Red";

function calculate() {
	mouseDown = 1;
	var strength = slider1.value;
	var defense = slider2.value;
	var weaponDamage = slider3.value;

	//Damage
		var damage = Math.ceil(
				Math.pow(
					weaponDamage, strength * (0.17 - strength/10000)
				)
			);
	//Health
		var health = 75 + (defense * defense) + (strength * 2);	

		textBlue.innerHTML = 
			"Default Stats: " +
			"<br>"+ 
			"Strength " + strength + 
			"<br>"+ 
			" Defense " + defense +
			"<br>"+  
			" Weapon Damage " + weaponDamage;
		textRed.innerHTML = 
			"Derived Stats: " +
			"<br>"+ 
			"Health " + health + 
			"<br>"+ 
			" Damage " + mouseDown;
}

