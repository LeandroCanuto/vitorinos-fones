
 window.onload= slide1

function slide1(){
    document.getElementById('img').src="img/iphone4.png"
    setTimeout("slide2()", 2000)
    }
    
    function slide2(){
    document.getElementById('img').src="img/iphone2.png"
    setTimeout("slide3()", 2000)
    }
    
    function slide3(){
    document.getElementById('img').src="img/iphone3.png"
    setTimeout("slide1()", 2000)
    }