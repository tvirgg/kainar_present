var globjb = {number: 'first', front_color: 'black', background_color: 'white'}; //Создаем глобальны объект

function getData_number(numberObject){ //Функция заполнения объекта передаюзимся аргументом 
	globjb.number = numberObject.value;
}
function getData_front_color(front_colorObject){ //Функция заполнения объекта передаюзимся аргументом 
	globjb.front_color = front_colorObject.value;
}
function getData_background_color(background_colorObject){ //Функция заполнения объекта передаюзимся аргументом 
	globjb.background_color = background_colorObject.value;
}

function one(){ 
	document.getElementById(globjb.number).style.color = globjb.front_color;
}
function two(){
	document.getElementById(globjb.number).style.backgroundColor = globjb.background_color;
}

function handler(){ //функция сменны стиля у элемента с известным нам id 
	one(); //сменна стилей color и background-color в разных функциях, для синхронной работы (особенность js)
	two();
}




