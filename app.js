var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var op=document.getElementById("op");
var output=document.getElementById("output");
var btn=document.getElementById("btn");
var result;

function calculate(){
if(op.value=='+')
    result=parseInt(num1.value)+parseInt(num2.value);
else if (op.value=='-')
    result=parseInt(num1.value)-parseInt(num2.value);
else if(op.value=='*')
    result=parseInt(num1.value)*parseInt(num2.value);
else if(op.value=='/')
    result=parseInt(num1.value)/parseInt(num2.value);

output.innerHTML="Result: "+result;
}