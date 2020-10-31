var man= {
	"Имя":"",
	"Фамилия":"",
	"Пол":"",
	"Возраст":"",
	"Любимое_число":"",
	"Любимый_цвет":"",
	"О_себе":"",
	"Почта":"",
	"Пароль":"",
	"Велосипед":"",
	"Автомобиль":"",
};


function f1() {
	var out="";
	man.Имя = document.forms["form1"]['namef'].value;
	man.Фамилия = document.forms["form1"]['namel'].value;
	man.Пол = document.forms["form1"]['gender'].value;
	man.Возраст = document.forms["form1"]['age'].value;
	man.Любимое_число = document.forms["form1"]['num'].value;
	man.Любимый_цвет = document.forms["form1"]['color'].value;
	man.О_себе = document.forms["form1"]['textarea'].value;
	man.Почта = document.forms["form1"]['email'].value;
	man.Пароль = document.forms["form1"]['pass1'].value;
	
	if (document.forms["form1"]['velo'].checked) {
		man.Велосипед = "есть";
	
	}
	if (document.forms["form1"]['auto'].checked) {
		man.Автомобиль = "есть";
	
	}
	for (key in man){
		out += 	key + " " + man[key] + '<br>';
	}
	
	localStorage.setItem("out1",out);
}

function passCheck(){
var p1 = document.forms["form1"]['pass1'].value;
var p2 = document.forms["form1"]['pass2'].value;	
	
	if (p1 == 0 || p2 == 0) {
		alert("Введите пароль");
		return false;
		
	}
	
	if (p1 != p2) {
		alert("пароли не совпадают");
		return false;
		
	}
	
	else {
		return true;
}
}
