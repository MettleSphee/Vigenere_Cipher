function print_output(resu){
	console.log(resu);
	document.getElementsByName('result')[0].value=resu;
}

function code(txt,key,operation){
	//A=65;
	//Z=90;
	//a=97;
	//z=122;
	
	//input
	var inp=0,counter=0;
	var resu='',ch='';
	var keyvalues=[];
	
	for (let i=0; i<key.length; i++){
		keyvalues[i]=key.charCodeAt(i)-65;
	}
	for (let i=0; i<txt.length; i++){
		//transformation by letter
		ch=txt[i];
		if (/[A-Z]/.test(ch))
		{
			let inp=txt.charCodeAt(i);
			if (operation===1) inp+=keyvalues[counter%key.length];
			else if (operation===-1) inp-=keyvalues[counter%key.length];
			while (inp>90) inp-=26;
			while (inp<65) inp+=26;
			ch=String.fromCharCode(inp);
			counter++;
		}
		//output
		resu+=ch;
	}
	print_output(resu,0)
}

function process()
{
	var key=document.getElementById("key").value;
	key=key.toUpperCase();
	var txt=document.getElementById("txt").value;
	txt=txt.toUpperCase();
	var value="";
	value=document.getElementById("value").value;
	console.log(txt);
	console.log(key);
	var operation=0;
	if (value==='encode') operation=1;
	else if (value==='decode') operation=-1;
	code(txt,key,operation);
}