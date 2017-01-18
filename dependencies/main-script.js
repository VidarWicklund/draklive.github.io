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
	
	var element = document.getElementById("menu-bar");
	if (percent > 0.145)
	{
		addClass(element, "menu-bar-fixed");
		document.getElementById("menu-bar-spacer").style.display = "block";
	}
	else
	{
		removeClass(element, "menu-bar-fixed");
		document.getElementById("menu-bar-spacer").style.display = "none";
	}
}


//others code, but it seems to work
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}