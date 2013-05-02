function myFunction()
{

var addr = $('meta[name=bitcoin]').attr("content");
var x;
var r=confirm;javascript:window.prompt ('Please send a donation to our Bitcoin address:', addr);
if (r)
  {
  x="Thank you!";
  }
else
  {
  x="Thank you!";
  }
document.getElementById("demo").innerHTML=x;
}
