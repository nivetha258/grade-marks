// grade marks  


document.getElementById("result-section").style.display="none";

let number1Ele=document.getElementById("number1")
let number2Ele=document.getElementById("number2")
let number3Ele=document.getElementById("number3")
let number4Ele=document.getElementById("number4")
let number5Ele=document.getElementById("number5")
let buttonEle = document.getElementById("button")

buttonEle.addEventListener("click",function (){

let  number1 = parseInt(number1Ele.value);
let  number2 = parseInt(number2Ele.value);
let  number3 = parseInt(number3Ele.value);
let  number4 = parseInt(number4Ele.value);
let  number5 = parseInt(number5Ele.value);
	
	let total = number1 + number2 + number3 +number4 + number5;
	let a;
	let average =total/5;
	document.getElementById("total").innerText = "Your total is " + total;
	
	if(average < 35){
		
		a= "F";
	}
	else if(average > 34 && average < 45 ){
		
		a= "E";
	}
	else if(average > 44 && average < 50){
		a= "D";
	}
	else if(average > 49 && average < 60){
		a= "C";
	}
	else if(average > 59  && average < 80){
		a= "B";
	}
	else if(average > 79  && average < 90){
		a= "A";
	}
	else {
		a= "A+";
	}
	document.getElementById("result").innerText = "Your grade is "+ a;
	document.getElementById("result-section").style.display="block";


})

