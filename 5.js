var kv=[0,1,2,3,4,5,6,7,8,9]; //эта база данных
var man=[0,'иванов','петров','сидоров','смит','береза','сигал','сталлоне','чан','ли']; //эта база данных

var pers={
	"Имя":"Валерий",
	"Фамилия":"Жмышенко",
	"Возраст":54,
	"Машина":"Нексия",
	
};//ассоциацивный массив - это объект
//pers- это объект
// свойство и ключ это одно и тоже, потом идёт значение
function f1(){
	var k;
	k = document.getElementById('in1').value; // забираем значение
document.getElementById('out').innerHTML = man[k];


}

 
function f2(){
	var k;
	k = document.getElementById('in2').value; // забираем значение
for (var i=0;i<10;i++){
	if (k == man[i]) {
		document.getElementById('out').innerHTML = kv[i];
		
		
		
	}
}

}

	
function f3(){
	for ( var key in pers){
	document.getElementById('out').innerHTML += key + ' -- ' + pers[key] + '<br>';
}
};


function f4(x) {
	document.getElementById('out').innerHTML = pers[x];
	
	
}

//x- это атрибут



