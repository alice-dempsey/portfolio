function getTitle () {
	var data = localStorage.getItem('proj'); 
	data = JSON.parse(data); 
	return data.name; 
}

function getImage() {
	var image = document.getElementById("project_pic"); 
	var data = localStorage.getItem('proj');
	data = JSON.parse(data);
	image.src = data.image;
	image.style.display = "flex";
	image.style.alignSelf = "center"; 
	image.style.width = "60%"; 
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