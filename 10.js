var one = document.getElementById('one');
var radio1 = document.getElementsByName('in1');



radio1[0].onchange = f1;
radio1[1].onchange = f1;
radio1[2].onchange = f1;

// или цикл:

//for (i=0;i<radio1.length;i++) {
	//radio1[i].onchange = f1;
// }
function f1() {
	one.style.backgroundColor = this.value;
}


var but = document.getElementById('but');
var two = document.getElementById('two');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
but.onclick = f2;

function f2() {
	for (i=0; i<radio2.length;i++){
	if (radio2[i].checked) {
		two.style.backgroundColor = radio2[i].value;
	}
}


	for (i=0;i<radio3.length;i++){
	if (radio3[i].checked) {
		two.style.width = radio3[i].value;
	}
}
}

//пт в 11
