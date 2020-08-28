function getTitle () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.name; 
}

function getTagline () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.tagline; 
}

function getTech () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.tech; 
}

function getSummary () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.summary; 
}

function getMe () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.mypart; 
}

function backButton () {
	localStorage.clear(); 
	window.location='portfolio.html'
}

/*** Functions for Image Gallery ***/ 

var currIndex; 
var length; 

function origImage() {
	currIndex = 0; 
	getImage(currIndex); 
}

function nextImage() {
	currIndex = (currIndex + 1) % length;
	console.log(currIndex)
	getImage(currIndex); 
}

function prevImage() {
	if (currIndex == 0) {
		currIndex = length - 1; 
	} else {
		currIndex = (currIndex - 1) % length;
	}
	console.log(currIndex)
	getImage(currIndex); 

}

function getImage(index) {
	var image = document.getElementById("project_pic"); 
	var data = localStorage.getItem('proj');
	data = JSON.parse(data);
	length = data.images.length; 
	image.src = data.images[index];
	image.style.display = "flex";
	image.style.alignSelf = "center"; 
	image.style.width = "100%";
	image.style.height = "25vw"; 
	image.style.marginTop = "3vw";
}