onLoad();

function onLoad()
{
	document.getElementById("menu-bar-fixed").innerHTML = document.getElementById("menu-bar").innerHTML;
	document.getElementById("menu-bar-fixed").style.width = document.getElementById("page").clientWidth + "px";
}

function gotoPage(page_name)
{
	if(page_name == "rosnet")
	{
		window.open('http://rosnet.rosendalsgymnasiet.se/',  "_blank");
		return;
	}
	alert('We are sorry, we have not added the "' + page_name + '" page yet');
}
function pageScroll()
{
	var percent = document.getElementById("page").scrollTop/document.getElementById("page").clientWidth;
	if (percent > 0.145)
	{
		
		document.getElementById("menu-bar-fixed").style.display = "block";
	}
	else
	{
		document.getElementById("menu-bar-fixed").style.display = "none";
	}
}

window.addEventListener('resize', function(event){
  document.getElementById("menu-bar-fixed").style.width = document.getElementById("page").clientWidth + "px";
});