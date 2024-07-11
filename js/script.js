
function textChange() {
    document.getElementById('t_c').innerHTML="Hello World"
    
}


function showDate() {
    document.getElementById('t_d').innerHTML=Date();
    
}



function bulbOff() {
    document.getElementById('b_img'). scr="images/bulboff.gif";
    
}
function bulbOn() {
    document.getElementById('b_img'). src="images/bulbon.gif"
    
}
function colorChange() {
    document.getElementById('t_clr'). style.color='green'
    
}
function sText() {
    document.getElementById('sh_text'). style.display="block"
    
}
function hText() {
    document.getElementById('sh_text'). style.display="none"
    
}
function d_text() {
    document.write("Javascript")
    
}
function s_Alert() {
    window.alert("Red Mark")
    
}

function con_log() {
    console.log("hey there!")
    
}
function s_print() {
    window.print("hey there!")
    
}


var number1 =4;
var number2 =3;

var result = number1 + number2;

function rAddition() {
    document.getElementById('r_a').innerHTML=result;
    
}
function vMessage() {
    var data = "hello";
    document.getElementById('vm').innerHTML=data;
    
}
//
let number3, number6;
number3 =4;
number6 =7;

number3 + number6;

function rLet() {
    document.getElementById('r_l').innerHTML=result;
    
}
function v_Message() {
    var data = "hello";
    document.getElementById('v_m').innerHTML=data.repeat(4);
    
}
//
function classExample() {
    document.getElementsByClassName('p')[0].innerHTML="Hi";
    
}
//
function elementCount() {
    var info = document.getElementsByTagName('button')
    alert(info.length);
    
}
//
function elementCount() {
    var info = document.getElementsByTagName('p')
    alert(info.length);
    
}
function va_Message() {
    var data = "hello";
    document.getElementById('vmm').innerHTML=data;
    
}
function element_Count() {
    var info = document.getElementsByTagName('p')
    alert(info.length);
    
}
function e_Count() {
    var info = document.getElementsByTagName('line')
    alert(info.length);
    
}
function focusFunction() {
    document.getElementById("Input").style.background = "pink";
  }
  
  // No focus = Changes the background color of input to red
  function blurFunction() {
    document.getElementById("Input").style.background = "skyblue";
  }
  //
  function myFunction(first_name) {
    document.getElementById(first_name).style.background = "yellow";
  }
  function Function(last_name) {
    document.getElementById(last_name).style.background = "pink";
  }
  function f_img() {
    alert(" image could not be loaded.");
  }
//
function d_key() {
    alert("Press carefully!");
  }
  //
  function r_Info() {
    alert('Reset Done!');
  }
//
function s_Info() {
    let x = document.getElementById("input");
    document.getElementById("s_enter").innerHTML = "You are searching for: " + x.value;
 }
//
 function e_com(){
    document.getElementById("pa_g").innerHTML = "My first paragraph.";
 }
 //
 function e_Add(){
    let a = 1;     
    let b = a + 10;  


document.getElementById("add_r").innerHTML = b;
}

function e_out(){
    document.getElementById("s_out").innerHTML = 2 + 4;
}

function a_Res(){
    alert(9+9);
}
//

function e_let(){
    let number1 = 5;
    let number2 = 10;
    let result = number1 + number2;

    document.getElementById("s_Let").innerHTML = result;
}
//
function e_min(){
    let number1 = 5;
    let number2 = 10;
    let result = number1 - number2;

    document.getElementById("s_Min").innerHTML = result;
}
//
function e_mul(){
    var number1 = 10;
    var number2 = 10;
    var result = number1 * number2;

    document.getElementById("s_Mul").innerHTML = result;
}
//
function e_div(){
    var number1 = 10;
    var number2 = 2;
    var result = number1 / number2;

    document.getElementById("s_Div").innerHTML = result;
}
//
function e_Con(){
    const number1 = 8;
    const number2 = 8;
    let total = number1 + number2;

    document.getElementById("s_con").innerHTML =  "The total is:"  +  total;
}

function e_Opa(){
    let number1 = "4";
    let number2 = "0";
    let result = number1 < number2  ;
    document.getElementById("s_opa").innerHTML = "Is A less than B? " + result;
}
//
function e_Str(){
    let number1 = "Java";
    let number2 = "Script";
    let result = number1 + " " + number2  ;
    document.getElementById("s_str").innerHTML = result;
}
//
function e_Plus(){
    let number1 = "Build";
    number1 += " your career.";
    document.getElementById("s_plus").innerHTML = number1;
}
//
function e_Mod(){
    let number1 = 5;
    let number2 = 2;
    let result = number1 % number2;
    document.getElementById("s_mod").innerHTML = result;
}
//
function e_Eq(){
    let number1 = "5";
    number1 -= "8";
    document.getElementById("s_eq").innerHTML = number1;
}
//
function e_Multi(){
    let number1 = "5";
    number1 *= "7";
    document.getElementById("s_multi").innerHTML = number1;
}
//
function e_Multim(){
    let number1 = "5";
    number1 **= "2";
    document.getElementById("s_multim").innerHTML = number1;
}
//
function e_Data(){
    let Total = 10 + 5 + "Addition";
    document.getElementById("s_data").innerHTML = Total;
}