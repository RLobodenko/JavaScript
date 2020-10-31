var m=['admin','a','b','c']; 
//alert(m[0]);
function f3() {
var x=document.getElementById('in3').value;
x=parseInt(x);
document.getElementById('out').innerHTML = m[x];
}



function f7(){
	var x=document.getElementById('in3').value;

for (var i=0;i<4;i++){
	if (m[i]==x){
	document.getElementById('out').innerHTML = i;
	}
}

}

	
	

function f1() {
	alert('это кнопка');	
}


function f2() {
	var a=document.getElementById('in1').value;// value- входное, document- это html, 
	// getElementById - это id берёт
	a=parseInt(a); // преобразует строку в число
	var b=document.getElementById('in2').value;
	b=parseInt(b)
	var res=a+b;
	alert(res);
	document.write(res); // выводит результат
	document.getElementById('out').innerHTML = 'результат = ' + res; // innerHTML, out - выходное
}


function f4() {
	var a=document.getElementById('in1').value;// value- входное
	a=parseInt(a);
	var b=document.getElementById('in2').value;
	b=parseInt(b)
	var res=a-b;
	alert(res);
	document.write(res);
	document.getElementById('out').innerHTML = 'результат = ' + res; 
}


function f5() {
	var a=document.getElementById('in1').value;
	a=parseInt(a);
	var b=document.getElementById('in2').value;
	b=parseInt(b)
	var res=a*b;
	alert(res);
	document.write(res);
	document.getElementById('out').innerHTML = 'результат = ' + res; 
}


function f6() {
	var a=document.getElementById('in1').value;
	a=parseInt(a);
	var b=document.getElementById('in2').value;
	b=parseInt(b)
	var res=a/b;
	alert(res);
	document.write(res);
	document.getElementById('out').innerHTML = 'результат = ' + res;
}