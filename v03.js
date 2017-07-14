const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStarWars7 = 13;

const name = "name"
const edadName = 26

const name2 = "name2"
const edadName2 = 12

function canWatchStarWars7(name, age, isWithAdult = false) {
	if(age >= pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}`)
	}else if(isWithAdult){
		alert(`${name} puede pasar a ver ${starWars7}.
		Aunque su edad es ${age}, se ecuentra acompañada/o por un adutlto`)
	}else{
		alert(`${name} no puede pasar a ver ${starWars7}.
		Tiene ${age} años y necesita tener ${pgStarWars7}`)
	}
}
canWatchStarWars7(name, edadName);
canWatchStarWars7(name2, edadName2, true);


// Arrow Function

const 
 starWars7 = 'Star Wars: El Despertar de la Fuerza', 
 pgStarWars7 = 13,
 name = "name", 
 edadName = 26,
 name2 = "name2",
 edadName2 = 12;

let canWatchStarWars7 = (name, age, isWithAdult = false ) => {
	if (age >= pgStarWars7) {
	alert(`${name} puede pasar a ver ${starWars7}`)
}else if(isWithAdult){
	alert(`${name} puede pasar a ver ${starWars7}.
	Aunque su edad es ${age}, se ecuentra acompañada/o por un adutlto`)
}else{
	alert(`${name} no puede pasar a ver ${starWars7}.
	Tiene ${age} años y necesita tener ${pgStarWars7}`)
}
} 

canWatchStarWars7(name, edadName);
canWatchStarWars7(name2, edadName2, true);