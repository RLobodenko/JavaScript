var m=[232,444,54,123,222];



function f1() {
var max=0;
for (var i=0; i<m.length;i++){	
	if (m[i]>max){
		max = m[i];
	}
}
	document.getElementById('out').innerHTML = 'Максимальный элемент = ' + max;
}


function f2() {
	var e = document.getElementById('in1').value;
		e = parseInt(e);
	m.push(e);

	console.log(m);
}

function f3() {
		var a = document.getElementById('in2').value;
			a = parseInt(a);
	for (var i=0;i<5;i++) {
	if (m[i]==a){	
		document.getElementById('out1').innerHTML = 'Элемент находится в массиве под номером' + ' ' + i;
	return;
	}
	else {
	document.getElementById('out1').innerHTML = 'не найдено';
		}
	}
}
	

