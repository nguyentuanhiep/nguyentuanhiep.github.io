var input=document.getElementById("number");

var arr = document.getElementsByClassName ("button");
for (var i = 0; i<arr.length;i++) {
	arr[i].addEventListener("click",function(){
		var v =this.value;		
		input.value  += v;
	})
}

document.getElementById("buttonback").addEventListener("click",function () {
	input.value ="";
});

document.getElementById("equal").addEventListener("click",function () {
	if (input.value==""){
		return;
	}
	var a = input.value.replace(/x/g,"*");
		a = a.replace(/÷/g,"/");
	console.log(a);
	input.value = eval(a);

});

document.getElementById("squareRoot").addEventListener("click",function () {
	var a = input.value.replace(/x/g,"*");
		a = a.replace(/÷/g,"/");
	input.value = Math.sqrt(eval(a));
});

document.getElementById("percent").addEventListener("click",function () {
	var a = input.value.replace(/x/g,"*");
		a = a.replace(/÷/g,"/");
	input.value = eval(a)/100;
});

document.getElementById("factorial").addEventListener("click",function(){
	var a = input.value.replace(/x/g,"*");
		a = a.replace(/÷/g,"/");
	var b = factorial(eval(a));
	input.value = b;
});
function factorial (num){
  var num;  
    var resuil=1;
    if(num==1||num==0){        
      return resuil;
    }
    
    for(var i=2; i<=num;i++){
      resuil=resuil*i;     
     }      
    return resuil;
}

console.log(input.value);		
  
 


