var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/4.jpg') {
    	myImage.setAttribute ('src','images/me.jpg');
    }else {
      	myImage.setAttribute ('src','images/4.jpg');
    }
}