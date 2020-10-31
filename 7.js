function f1(x) {
	alert('заплатите ' + x + ' р');
	
}


var kv={
	"комнат":0,
	"расположение":"",
	
}


function fk(x) {
	kv.комнат = x;
}


function fz(x) {
	kv.расположение = x;
}

// defer -чтобы сначала css, html загрузились. а потом js
function f2() {
	alert("Ваша квартира " + kv.комнат + " " + "комнаты" + " " + kv.расположение);
	
}



var block = document.getElementById('d1');
block.onclick = fb;
block.ondblclick = fbb;


function fb(){
	this.style.backgroundColor="green";
	
}



function fbb(){
	this.style.backgroundColor="red";
	
}

