var k=1;
var kk=1;
var kkk=1;


function f1() {
	
	if (k==1) {
		document.getElementById('p1').src = "akyla.jpg";
	k=2;
	return; // return здесь - это выход из функции
	
	}
	
	
	if (k==2) {
	document.getElementById('p1').src = "pobeda.jpg";	
		k=1;
		return;
	}
	
}


function f2() {
	
	if (kk==1) {
		document.getElementById('p2').style.visibility = "hidden";
		kk=2;
		
	}
	else {
document.getElementById('p2').style.visibility = "visible";	
	
		kk=1;
		
	}
}



function f3() {
	if (kkk==1) {
		document.getElementById('p3').src = "pobeda.jpg";
		kkk=2;
	}
	else if (kkk==2) {
document.getElementById('p3').src = "1.jpg";	
		kkk=3;
	}
		else if (kkk==3) {
document.getElementById('p3').src = "akyla.jpg";	
		kkk=4;
	}
	else {
document.getElementById('p3').src = "3.jpg";	
	kkk=1; }
}
	
	
	
	
	
	
	


