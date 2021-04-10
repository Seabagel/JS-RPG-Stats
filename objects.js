//variables
var textDefault = document.getElementById("paragraph1");
var textDerived = document.getElementById("paragraph2");
var sliderStrength = document.getElementById("slider1");
var sliderDefense = document.getElementById("slider2");
var sliderMagic = document.getElementById("slider3");
var boxWeaponDamage = document.getElementById("box1");

//para.id = "" or para.setAttribute("id", "idname")

//styling
textDefault.style.fontSize = "18px";
textDefault.style.color = "Blue";
textDerived.style.fontSize = "18px";
textDerived.style.color = "Red";

setInterval(function calculate() {
	var player = {
		strength : sliderStrength.value,
		defense : sliderDefense.value,
		magic : sliderMagic.value,
	};

	var weapon = {
		damage : boxWeaponDamage.value,
		//type : 
		//value : 
		//

	};

	//Health
		var health = 45 + (player.defense * player.defense) + (player.strength * 4) + (player.magic * 2);	
	//Stamina
	//var stamina = ((+strength) + (+defense) + (+magic)) *6;
		var stamina = 45 + (player.strength * player.strength) + (player.defense * 4) + (player.magic * 2);
	//Mana
		var mana = 65 + (player.magic * player.magic) + (player.magic * 2);	

	//Damage
		var damage = Math.ceil(
				Math.pow(
					weapon.damage, player.strength * (0.17 - player.strength*4/1000)
				)
			);
	//Magic Damage
		var damageMagic = Math.ceil(
				Math.pow(
					weapon.damage, player.magic * (0.17 - player.magic*4/1000)
				)
			);

		textDefault.innerHTML = 
			"Default Stats: " +
			"<br>"+ 
			"Strength = " + player.strength + 
			"<br>"+ 
			" Defense = " + player.defense +
			"<br>" + 
			" Magic = " + player.magic + 
			"<br>"+ 
			" Weapon Damage " + boxWeaponDamage.value.length;
		textDerived.innerHTML = 
			"Derived Stats: " +
			"<br>" + 
			"Health = " + health + 
			"<br>" + 
			" Stamina = " + stamina +
			"<br>" + 
			"Mana = " + mana + 
			"<br>" + 
			" Damage = " + damage +
			"<br>" + 
			" Magic Damage = " + damageMagic;
}, 50);

//Make a description of what the stats does
// Ex. Defense gets you more HP and blocks incoming damage
//Some techniques and spells require certain amount of skills
//so if your magic is low, you won't be able to use the awesome Grand Wizard spells.