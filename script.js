var a;
var x;
var y;
var c;
var flag;

function play(i)
{
	c = i;
	document.getElementById("score").innerHTML = "Score : " + c;
	document.getElementById("play").value = "Pause";
	document.getElementById("play").style.backgroundColor = "red";
	document.getElementById("play").onclick = function() {(pause())};
	a = setInterval(shift,1500);
	document.getElementById("newgame").style.visibility = "hidden";
}

function pause()
{
	clearInterval(a);
	document.getElementById("play").value = "Resume";
	document.getElementById("play").style.backgroundColor = "orange";
	document.getElementById("play").onclick = function() {(play(c))};
	document.getElementById("newgame").style.visibility = "visible";
}

function shift()
{
	x = Math.floor(Math.random()*520) + "px";
	y = Math.floor(Math.random()*1000) + "px";

	document.getElementById("balloon").style.top = x;
	document.getElementById("balloon").style.left = y;

	flag = true;
}

function count()
{
	if(document.getElementById("play").value != "Resume" && flag==true)
	{
		flag = false;
		c++;
	}
	document.getElementById("score").innerText = "Score : " + c;
}