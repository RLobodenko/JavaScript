var cat={ "кличка": "Васька",
		"порода": "лесной",
		"корм": "вискас",
			"дети": "двое",
			"лет": "7",
			"глаза": "зелёные",
			"родословная": "нет",
	};
	
	
	var dog={ "кличка": "Рафик",
		"порода": "овчарка",
		"корм": "педигри",
"дети": "нет",
"лет": "3",
"глаза": "коричневые",
"родословная": "есть",	
	};
	
	
	
function f1() {
	for ( var key in cat) {
	document.getElementById("out").innerHTML += key + " " + cat[key] + '<br>';
}
}

function f2(x) {
	document.getElementById("out").innerHTML = cat[x];
}



function f3() {
	for (var key in dog) { 
	
	document.getElementById("out").innerHTML += key + " " + dog[key] + '<br>';
}
}

function f4(x) {
	document.getElementById("out").innerHTML = dog[x];
}


