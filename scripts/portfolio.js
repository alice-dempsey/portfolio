var myprojects = [
		{
			"name":"HubSchool",
			"image":"../style/assets/WCFB.png",
			"tagline":"Online platform to connect students, parents, and teachers",
			"tech":"HTML, CSS, JavaScript, and AirTable",
			"summary":"My friends and I completed this project for the Hack for the People 2020 hackathon. In 72 hours, we put together an online platform for students, parents, and teachers to communicate during distance learning. The student/parent portal allows the user to subscribe to certain pages for their classes. The pages then fill dynamically with the resources the teacher has posted. The teacher portal allows the teachers to easily upload new resources and manage their classes. Although the website is quite simple, I'm incredibly proud of how much we accomplished given the time limit as well as family obligations.",
			"mypart":"I worked primarily on the dashboard page. I wrote the JavaScript functions to pull the information from the AirTable database for a given class and display it to the user. I also set up the localStorage in order to keep track of which user was logged in and thus which classes should be displayed."
		},
		{
			"name":"Interactive Menu Browsing",
			"image":"../style/assets/WCFB.png",
			"tagline":"Mobile menu browsing component built in Flutter",
			"tech":"Flutter, Dart, iOS Simulator, Android Studios",
			"summary":"During the summer of 2020, I interned with Publicis Sapient and worked on building a Flutter app that allowed the user to browsing through a fastfood menu.",
			"mypart":""
		},
		{
			"name":"Food Bank Volunteer Portal",
			"image":"../style/assets/WCFB.png",
			"tagline":"Login portal to track which volunteers are currently working",
			"tech":"HTML, CSS, JavaScript, GitHub, and Trello",
			"summary":"My first year at Tufts, I joined JumboCode, a student-run club that builds apps and websites for non-profits. I continued with the club my sophomore year, and we worked on a volunteer sign-in/sign-out portal for the Worechester County Food Bank. I learned how to build a website from a designer's Zeplin sketches. I love working with JumboCode because I collaborate with other students in real world scenarios. We use common tools such as Trello and GitHub in order to build the best project we can for our clients.",
			"mypart":"I also implemented the system that saves the currently working volunteers' names in order to provide a helpful auto-complete feature. I learned how to use local storage; we used it during development to quickly save and access data."
		},		
		{
			"name":"Visual Analytics Final Project",
			"image":"../style/assets/crowdsourcing.png",
			"tagline":"Dashboard to track earthquake damage",
			"tech":"HTML, CSS, Tableau, and JavaScript - D3",
			"summary":"Junior fall, I took Visual Analytics with Professor Remco Chang. We learned about how engineers use visual tools to analyze information and comprehend enormous data sets. We dabbled in different tools using in the Visual Analytics world such as R, Tableau, and the D3 JavaScript library. For our final project, my partner and I tackled a Mini Challenge from the VAST 2019 \"Disaster at St. Himark!\". We used D3 and Tableau to build a dashboard for the fictional town officials of St. Himark to monitor a recent earthquake that damaged the nuclear power plant. We used graphs and maps to help the town officials understand the citizen reports and prioritize resources.",
			"mypart":"I worked primarily on the dashboard page. I wrote the JavaScript functions to pull the information from the AirTable database for a given class and display it to the user. I also set up the localStorage in order to keep track of which user was logged in and thus which classes should be displayed."
		},		
		{
			"name":"HubSchool",
			"image":"../style/assets/WCFB.png",
			"tagline":"Online platform to connect students, parents, and teachers",
			"tech":"HTML, CSS, JavaScript, and AirTable",
			"summary":"My friends and I completed this project for the Hack for the People 2020 hackathon. In 72 hours, we put together an online platform for students, parents, and teachers to communicate during distance learning. The student/parent portal allows the user to subscribe to certain pages for their classes. The pages then fill dynamically with the resources the teacher has posted. The teacher portal allows the teachers to easily upload new resources and manage their classes. Although the website is quite simple, I'm incredibly proud of how much we accomplished given the time limit as well as family obligations.",
			"mypart":"I worked primarily on the dashboard page. I wrote the JavaScript functions to pull the information from the AirTable database for a given class and display it to the user. I also set up the localStorage in order to keep track of which user was logged in and thus which classes should be displayed."
		},		
		{
			"name":"HubSchool",
			"image":"../style/assets/WCFB.png",
			"tagline":"Online platform to connect students, parents, and teachers",
			"tech":"HTML, CSS, JavaScript, and AirTable",
			"summary":"My friends and I completed this project for the Hack for the People 2020 hackathon. In 72 hours, we put together an online platform for students, parents, and teachers to communicate during distance learning. The student/parent portal allows the user to subscribe to certain pages for their classes. The pages then fill dynamically with the resources the teacher has posted. The teacher portal allows the teachers to easily upload new resources and manage their classes. Although the website is quite simple, I'm incredibly proud of how much we accomplished given the time limit as well as family obligations.",
			"mypart":"I worked primarily on the dashboard page. I wrote the JavaScript functions to pull the information from the AirTable database for a given class and display it to the user. I also set up the localStorage in order to keep track of which user was logged in and thus which classes should be displayed."
		}
	]


function populatePage() {
	var parent = document.getElementById("card_container");
	parent.style.margin = "5vw"; 
	// parent.style.display = "flex"; 
	parent.style.width = "100%";
	parent.style.display = "grid"; 
	parent.style.gridTemplateColumns = "repeat(2, 1fr)"; 

	for (project in myprojects) {
		createCard(myprojects[project]); 
	}
}

function createCard(data) {
	var card = document.createElement("div"); 
	var image = document.createElement("img");
	image.src = data.image; 
	image.style.width = "80%"; 
	image.style.opacity = "1";

	var title = document.createElement("div");
	var text = document.createTextNode(data.name); 
	title.appendChild(text); 
	title.id = data.name; 
	title.style.opacity = "0"; 

	image.onmouseover = function () {
		this.style.opacity = "0.3"; 
		document.getElementById(data.name).style.opacity = "1"; 
	} 
	image.onmouseleave = function () {
		this.style.opacity = "1"; 
		document.getElementById(data.name).style.opacity = "0"; 
	}
	card.appendChild(image); 
	card.appendChild(title);
	card.style.marginBottom = "3vw";

	var parent = document.getElementById("card_container");
	parent.appendChild(card); 
}






















