function getBitcoinAddr(){
  var m = document.getElementsByTagName('meta');
  for(var i in m){
   if(m[i][i].name == "bitcoin"){
     return m[i].content;
   }
  }
}
function myFunction()
{
var x;
var r=confirm;javascript:window.prompt ('Please send a donation to our Bitcoin address:', getBitcoinAddr());
if (r==true)
  {
  x="Thank you!";
  }
else
  {
  x="Thank you!";
  }
document.getElementById("demo").innerHTML=x;
}
