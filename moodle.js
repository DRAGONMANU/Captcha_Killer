var body = document.body;
var textContent = body.textContent;

var n = textContent.search("Please ");
var myString = textContent.substring(n, n+40);
console.log(myString);
var splits = myString.split(' ', 10);
var add = textContent.search("Please add");
var enter1 = textContent.search("Please enter first");
var enter2 = textContent.search("Please enter second");
var subtract = textContent.search("Please subtract");
var nameValue = "100";

if(add!=-1)
{
	console.log("add");
	nameValue = parseInt(splits[4],10)+parseInt(splits[6],10);
}
else if(subtract!=-1)
{
	console.log("sub");
	nameValue = parseInt(splits[4],10)-parseInt(splits[6],10);
}
else if(enter1!=-1)
{
	console.log("first");
	nameValue = parseInt(splits[6],10);
}
else
{
	console.log("second");
	nameValue = parseInt(splits[8],10);
}

console.log(splits[4]);
console.log(splits[6]);
console.log(splits[8]);
var delayMillis = 500;

setTimeout(function() {
 document.getElementById("valuepkg3").value = nameValue;
}, delayMillis);
