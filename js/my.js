
	// for services page
	
		    var x = document.getElementById("service1");
		    var y = document.getElementById("service2");
            var z = document.getElementById("service3");


	window.onload=function(){
        document.getElementById("service1").style.display='none';
		document.getElementById("service2").style.display='none';
        document.getElementById("service3").style.display='none';
		
		}
	        
			function myFunction() {	
	   	var x = document.getElementById("service1");

		if (x.style.display === "none") {
			x.style.display = "block";
			y.style.display = "block";
		} else {
			x.style.display = "none";
			y.style.display = "block";
			}
			
		}
			function myFunction1() {
		var y = document.getElementById("service2");
			
		if (y.style.display === "none") {
			y.style.display = "block";
			x.style.display = "block";
		} else {
			y.style.display = "none";
			x.style.display = "block";
			}
		}
		

			function myFunction2() {
		var z = document.getElementById("service3");
			
		if (z.style.display === "none") {
			z.style.display = "block";
			x.style.display = "block";
		} else {
			z.style.display = "none";
			x.style.display = "block";
			}
		}

