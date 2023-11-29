var tab=document.getElementsByClassName("tab");
var tabcontents=document.getElementsByClassName("tab-contents");

function Opentab(tabname)
{
    for(tablink of tab)
    {
        tab.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontents.classList.remove("active-tab");
    }
}

