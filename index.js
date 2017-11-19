window.onload = function(){
	var slides = document.querySelectorAll( "  #slaider .slides .aside-block ");
	var i = 0;

	document.getElementById("btn-prev").onclick = function(){
		slides[i].className = "" ;
		i--;

		if (i<0){
			i = slides.length - 1 ;
		}
		slides[i].className = "active";
	}

	document.getElementById("btn-next").onclick = function(){
		slides[i].className = "" ;
		i++;

		if (i>= slides.length){
			i = 0 ;
			}
		slides[i].className = "active";
	}
}
	