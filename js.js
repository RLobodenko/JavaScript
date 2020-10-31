var k=5; 
var secret = Math.floor(Math.random()*10)+1; 
//alert(secret); 

function f4(x) {
	k-=1;
	document.getElementById('out').innerHTML = k;


var i = document.getElementById('in1').value;
	if (i==secret){
			document.getElementById('pic1').src="pobeda.jpg";
			alert("Выиграл"); 
			document.getElementById('but1').disabled="true";		
	}
	
	else if (k==0){
			document.getElementById('pic1').src="akyla.jpg";
			document.getElementById('but1').disabled="true";
			alert("Проиграл");
		
	}
}

	
	



	
