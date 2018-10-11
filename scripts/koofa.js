function openInfoTab(evt, tabName)
{
	var i, tablinks, tabcontent;
	
	tabcontent = document.getElementByClassName("miscInfo");
	// hide all the misc-info tabs
	for(i = 0; i < tabcontent.length; i++)
	{
		tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementByClassName("miscLinks");
	// hide all the misc links
	for(i = 0; i < tablinks.length; i++)
	{
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	// show current tab and active button class
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}