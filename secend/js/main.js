
var firstbtn = document.querySelector(".blogs__b-cards__first-card");
var secbtn = document.querySelector(".blogs__b-cards__secend-card");
var elem = document.getElementById("first-card");
var elemtwo = document.getElementById("secend-card");
firstbtn.onclick=function moveSquare(){	
		elem.style ="box-shadow: 0 2px 4px rgba(0, 0, 0, .2);   transition: 0.5s;"; 
		elemtwo.style ="box-shadow: 0 0px 0px rgba(0, 0, 0, 0); transition: 0.5s;";
	}
secbtn.onclick=function moveSquaretwo(){	
		elemtwo.style ="box-shadow: 0 2px 4px rgba(0, 0, 0, .2); transition: 0.5s;"; 
		elem.style ="box-shadow: 0 0px 0px rgba(0, 0, 0, 0); transition: 0.5s;"; 
	}