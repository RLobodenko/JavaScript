var kv={
	"color":"",
	"mark":"",
	"salon":"",
	"kuzov":"",
	"dop":"",
}


function f1(x) {
	kv.color = x;
}

function f2(x) {
	kv.mark = x;
}


function f3(x) {
	kv.salon = x;
}

function f4(x) {
	kv.kuzov = x;
}

function f5(x) {
	kv.dop = x;
}
function f6() {
	document.getElementById("out").innerHTML = "";
	for ( var key in kv) {
	document.getElementById("out").innerHTML += key + "---" + kv[key] + '<br>';
}
}
