
window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 1000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	setTimeout(func2,2000);
};
function func1()
{
	document.getElementById("my_div").className="show";
}
function func2()
{
	document.getElementById("id1").className="overlay";
}
