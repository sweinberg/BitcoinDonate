function myFunction()
{

var addr = $('meta[name=bitcoin]').attr("content");
var x;
var r=confirm;javascript:window.prompt ('Please send a donation to our Bitcoin address:', addr);
if (r)
  {
  x="Thank you! &#9829;";
  }
else
  {
  x="Thank you! &#9829;";
  }
document.getElementById("demo").innerHTML=x;
}
