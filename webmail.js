var body = document.body;
var textContent = body.textContent;

var n = textContent.search("--\n");
var myString = textContent.substring(n+3, n+110);
console.log((myString));
var sad = myString.replace("\n"," ").replace("\r"," ").replace(","," ").replace(/(\r\n|\n|\r)/gm," ");
var splits = sad.replace(',',' ').split(' ', 100);

console.log("======");
console.log(splits.length);
var temp = 0;
var size = splits.length;
for (var i = 0; i < size; i++)
{
	if(temp==2 && (splits[i]=="" || splits[i]==" "))
	{
		splits = splits.slice(0,i-1);
		size = i-1;
		console.log("END");
		break;
	}
	if(splits[i]=="" || splits[i]==" ")
	{
		temp++;
		continue;
	}
	else
		temp=0;
	console.log((splits[i]));
}
console.log(size);

document.getElementsByTagName("td")[6].className = "input";

String.prototype.replaceAt=function(index, char)
{
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

var nameValue = "    ";
var num = 100;
var id=0;
var not = false;
var k=0;
var str = " ";
var re = /("."|-.-|:.:|'.'|\/.\/|_._)/;
var qu = /(.*\?)/;
var count = 0;
///
for (var i = 0; i < size; i++)
{
	if(splits[i]=="not")
		not = true;
	else if(splits[i]=="chars" && splits[i+2]!="small")
	{
		num=parseInt(splits[i-1],10);
		num = splits[i+2].charCodeAt()-num;
		if(!not)		
		{
			nameValue=nameValue.replaceAt(id,String.fromCharCode(num));
			id++;	
		}
		else
			not = false;
		i = i+2;
	}
	else if(splits[i]=="chars" && splits[i+2]=="small")
	{
		num=parseInt(splits[i-1],10);
		num = splits[i+3].charCodeAt()-num;
		if(!not)		
		{
			nameValue=nameValue.replaceAt(id,String.fromCharCode(num));
			id++;	
		}
		else
			not = false;
		i = i+3;
	}
	else if(re.test(splits[i]) && splits[i+1].charAt(0)=='+')
	{
		num = parseInt(splits[i+1].slice(-1));
		num = num + splits[i].charCodeAt(1);
		if(!not)		
		{
			nameValue=nameValue.replaceAt(id,String.fromCharCode(num));
			id++;
		}
		else
			not = false;
	}
	else if(re.test(splits[i]))
	{
		if(!not)		
		{
			nameValue=nameValue.replaceAt(id,splits[i].charAt(1));
			id++;			
		}
		else
			not = false;		
	}
	else if(qu.test(splits[i]))
	{
		console.log("k=");
		k=i;
		console.log(k);

	}
	else if(splits[i]=="=")
	{
		count = 0;
		num = parseFloat(splits[i+1]);
		while(i>k+1)
		{
			if(splits[i-2]=="-")
				num = num + parseInt(splits[i-1]);
			if(splits[i-2]=="/")
				num = num * parseInt(splits[i-1]);
			if(splits[i-2]=="*")
				num = num / parseInt(splits[i-1]);
			if(splits[i-2]=="+")
				num = num - parseInt(splits[i-1]);
			i=i-2;
			count=count+2;

		}
		console.log(num);
		nameValue=nameValue.replaceAt(id,num.toString());
	 	id++;
	 	i = i + count;
	}
}

///
var delayMillis = 500;

setTimeout(function() 
{
 	document.getElementsByName("captcha_input")[0].value = nameValue;
}, delayMillis);

