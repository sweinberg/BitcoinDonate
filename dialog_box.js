function getBitcoinAddr() {
   var metas = document.getElementsByTagName('meta');

   for (i=0; i<metas.length; i++) {
      if (metas[i].getAttribute("property") == "bitcoin") {
         return metas[i].content;
      }
   }

    return "";
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
