var b1=document.getElementById('one');
var b2=document.getElementById('two');

b1.onmouseenter = f9; //войти
b1.onmouseleave = f10; //покинуть

b2.onmouseenter = f9; //войти
b2.onmouseleave = f10; //покинуть

function f9() {
	this.style.backgroundColor="blue";
}

function f10() {
	this.style.backgroundColor="orange";
}




var b3=document.getElementById('closed');

b3.onclick = f1;

b3.oncontextmenu = f2;



function f1() {
	document.getElementById('closed').src = "dver_otkrytaya.jpg";	
}
function f2() {
	document.getElementById('closed').src = "dver-closed.jpg";
return false;	
}



var b4=document.getElementById('dom');

var b6=document.getElementById('dom3');





b4.onmouseenter = f3; //войти
b4.onmouseleave = f4;
b5.onmouseenter = f5; //войти
b5.onmouseleave = f6;
b6.onmouseenter = f7; //войти
b6.onmouseleave = f8;

function f3() {
	document.getElementById('dom').src = "dom1.jpg";	
}
function f4() {
	document.getElementById('dom').src = "dom.jpg";	
	
}


function f5() {
	document.getElementById('dom2').src = "dom1.jpg";	
}
function f6() {
	document.getElementById('dom2').src = "dom.jpg";	
}


function f7() {
	document.getElementById('dom3').src = "dom1.jpg";	
}
function f8() {
	document.getElementById('dom3').src = "dom.jpg";	
}



