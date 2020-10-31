var k=0;
var l=0;


function f1() {
	k+=1;
	document.getElementById('out').innerHTML = k; //эта строка для вывода нужна
}

function f2() {
	k-=1;
	document.getElementById('out').innerHTML = k; //эта строка для вывода нужна
}

function f3(x) {
	l+=x;
		document.getElementById('out1').innerHTML = l; //эта строка для вывода нужна

	if (l>=100){
		document.getElementById('pic').src="3.jpg";
		document.getElementById('but').disabled="true";
	}
	
		else if (l>=50){
		document.getElementById('pic').src="2.jpg";
		
	}
	
}






