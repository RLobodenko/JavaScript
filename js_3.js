var btn1 = document.getElementById('b1');
var btn2 = document.getElementById('b2');
var btn3 = document.getElementById('b3');
var a=0;
var b=0;
var c=0;


btn1.onclick = function() {
	a+=5;
document.getElementById('sky').style.width = 100 + a + 'px';
document.getElementById('sky').style.height = 100 + a + 'px';
}

btn2.onmousemove = function () {
	b+=5;
document.getElementById('moto').style.left = b + 'px';
}


btn3.onmousemove = function () {
	c+=5;
document.getElementById('moto1').style.top = c + 'px';
}