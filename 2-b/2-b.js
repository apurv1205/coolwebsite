function dofirst(){
but=document.getElementById("button");
but.addEventListener("click",dosecond);
}
function dosecond(){
input1=document.getElementById("in1").value;
cube1=Number(input1)*Number(input1)*Number(input1);
sphere1=4*cube1*Math.PI/3;
input2=document.getElementById("in2").value;
cube2=Number(input2)*Number(input2)*Number(input2);
sphere2=4*cube2*Math.PI/3;
var x=document.getElementById("display");
x.innerHTML="<br/>The volume of <br/>Cube 1 is " + cube1+"<br/>Sphere 1 is " + sphere1 + "<br/><br/><br/>The volume of <br/>Cube 2 is " + cube2+"<br/>Sphere 2 is " + sphere2;
if (sphere1>sphere2){
alert("\nVolume of sphere 1 and cube 1 is greater");	
}
else if(sphere1==sphere2){alert("\nVolume of spheres are same \nVolume of cubes are same ");	}
else{
alert("\nVolume of sphere 2 and cube 2 is greater");		
}
palindrome1();
palindrome2();
}
function palindrome1(){
var str1=Number(cube1).toString();
var str2=Number(cube2).toString();
var revstr1=str1.split('').reverse().join('');
var revstr2=str2.split('').reverse().join('');
if(str1==revstr1){
	alert("Cube 1 is a Palindrome");
	var box=document.getElementById("display");
	box.style.backgroundColor="#6666ff";
	}
if(str2==revstr2){
	alert("Cube 2 is a Palindrome");
	var box=document.getElementById("display");
	box.style.backgroundColor="pink";}
}
function palindrome2(){
var str1=Number(sphere1).toString();
var str2=Number(sphere2).toString();
var revstr1=str1.split('').reverse().join('');
var revstr2=str2.split('').reverse().join('');
if(str1==revstr1){
	alert("Sphere 1 is a Palindrome");
	var box=document.getElementById("display");
	box.style.backgroundColor="#66ffff";
	}
if(str2==revstr2){
	alert("Sphere 2 is a Palindrome");
	var box=document.getElementById("display");
	box.style.backgroundColor="white";}
}
window.addEventListener("load",dofirst);
