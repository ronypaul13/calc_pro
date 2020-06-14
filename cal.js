function bclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function cleardisplay()
{
    var clr=document.getElementById("screen").value=""
    
}
function qclick()
{
    var int=document.getElementById("screen").value
    var result=eval(int)
    document.getElementById("screen").value=result 
}