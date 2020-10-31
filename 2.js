var num = 333444;
var log = ['admin','abc','aaa','bbb','ccc'];
var pass = ['admin',111,222,333,444];


function f1(){
		var a = document.getElementById('in1').value;
	if (a == num) {
		
		alert("У вас скидка");
	}
	else {
		alert("Номер не совпадает");
		
	}

}


function f2() {
		var a = document.getElementById('in2').value;	
			var b = document.getElementById('in3').value;
				var c = document.getElementById('in4').value;

if (a+b+c==num) {
		
		alert("У вас скидка");
	}
	else {
		alert("Номер не совпадает");

	}

}





function f3(){
	var a = document.getElementById('in5').value;	
			var b = document.getElementById('in6').value;
			for (var i=0;i<5;i++) {
				if (log[i] == a && pass[i] == b){
					alert("Добро пожаловать");
					
					
				}
			}
}



function f4(){
		var a = document.getElementById('in7').value;
	if (a == 'кружка') {
		
		alert("правда");
	}
	else {
		alert("ложь");
		
	}
// else -если условие не работает
}


function f5(){
		var a = document.getElementById('in8').value;
	if (a == 'самолёт') {
		
		alert("правда");
	}
	else {
		alert("ложь");
		
	}

}


function f6(){
		var a = document.getElementById('in9').value;
	if (a == 'куртка') {
		
		alert("правда");
	}
	else {
		alert("ложь");
		
	}

}

