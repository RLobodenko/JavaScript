var man={
	"Имя":"",
	"Возраст":"",
	"Класс":"",
	"Профессия":"",
	"Раса":"",
	"Описание":"",
	"Аватар":"",
}
var k,p,y,a;


function f4 (x,y){
	z=y;
	a=x;
}


function f1(x) {
	k=x;
	
		man.Класс = x;
	//alert (k);
}



function f1(x) {
	k=x;
	
		man.Класс = x;
	//alert (k);
}

function f2(x) {
	p=x;
	man.Профессия = x;
	
	//alert (p);
}

var out="";

function f3() {
	man.Имя = document.getElementById("1").value;
	man.Возраст = document.getElementById("2").value;
	man.Раса = document.getElementById("3").value;
	man.Описание = document.getElementById("4").value;
	man.Класс = k;
	man.Профессия = p;
	man.Аватар = a;
	for (key in man){
		out += 	key + " " + man[key] + '<br>';
	}
	//out=man.Имя + " " + man.Возраст + " " + man.Класс + " " + man.Профессия + " " + man.Раса + " " + man.Описание + " " + man.Аватар;
	//alert(out);
	localStorage.setItem("out1",out); // сохранили информацию
	localStorage.setItem("out2",z); // сохранили информацию
	window.location='88.html'; //переход на другую страницу
}
//set- сохранить

//out1- имя на локальном диске





function f5() {
//alert('Акула');

}
function f6() {
//alert('Кружка');

}
function f7() {
//alert('Куртка');

}
function f8() {
//alert('Самолёт');

}
function f9() {
//alert('Пират');

}



