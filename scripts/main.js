
window.onload = initate();


	function initate() {
		getdate();
	    var style1 = document.getElementById("ssbtn1");
	    var style2 = document.getElementById("ssbtn2");
	    var style3 = document.getElementById('ssbtn3');

	    style1.addEventListener("click", function() {
	     swapStyleSheet("styles/default.css");
	 	})
	    style2.addEventListener("click", function() {
	    	swapStyleSheet("styles/dark.css");
	    })
	    style3.addEventListener("click", function() {
	    	swapStyleSheet("styles/display.css");
	    })
	}


	function swapStyleSheet(sheet){
		document.getElementById('pagestyle').setAttribute('href', sheet);
	}


function getdate (){
var today = new Date()
var year = today.getFullYear()
document.getElementById('yr').innerHTML = year;
}