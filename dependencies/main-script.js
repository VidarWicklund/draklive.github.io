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
	var width = document.getElementById("page").clientWidth;
	var scrolltop = document.getElementById("page").scrollTop;
	var percent = scrolltop/width;
	
	document.getElementById("menu-bar-fixed").innerHTML = document.getElementById("menu-bar").innerHTML;
	
	var element = document.getElementById("menu-bar");
	if (percent > 0.145)
	{
		document.getElementById("menu-bar-fixed").style.width = document.getElementById("page").clientWidth + "px";
		document.getElementById("menu-bar-fixed").style.display = "block";
	}
	else
	{
		document.getElementById("menu-bar-fixed").style.display = "none";
	}
}

window.addEventListener('resize', function(event){
  document.getElementsByClassName("menu-bar-fixed")[0].style.width = document.getElementById("page").clientWidth + "px";
});