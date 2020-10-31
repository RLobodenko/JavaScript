var block = document.getElementById('one');
var block2 = document.getElementById('two');
var block3 = document.getElementById('three');

block.onclick = f1;
block2.onclick = f1;

block.ondblclick = f2;
block2.ondblclick = f2;


block.oncontextmenu = f3;
block2.oncontextmenu = f3;

//oncontextmenu- правая кнопка мыши

block3.onmousemove = f4;

//onmousemove - движение мышки

function f1() {
	this.style.backgroundColor = "blue";
	
}

//this - значит этот


function f2() {
	this.style.backgroundColor = "pink";
	
}



function f3() {
	this.style.backgroundColor = "black";
	return false;
}

var a=150;

function f4() {
	this.style.width = a + 'px';
	a++;
}


//среда 11:00