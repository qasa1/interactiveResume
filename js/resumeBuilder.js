/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Ahsan Shahid";
 var role ="Web Developer";

 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);

 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 
 var bio = {
 	"name": "Ahsan Shahid",
 	"role": "Web Developer",
 	"email": "a9shahid@uwaterloo.ca",
 	"github": "https://github.com/qasa1",
 	"welcome": "Welcome to my interactive resume",
 	"skills": [
	 	{
	 		"icon": "./images/htmlIcon.png",
	 		"rating":"./images/5starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/jsonIcon.png",
	 		"rating":"./images/5starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/mysqlIcon.png",
	 		"rating":"./images/4starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/cssIcon.png",
	 		"rating":"./images/4starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/javascriptIcon.png",
	 		"rating":"./images/3starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/phpIcon.png",
	 		"rating":"./images/3starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/bootstrapIcon.jpeg",
	 		"rating":"./images/4starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/wordpressIcon.png",
	 		"rating":"./images/3starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/joomlaIcon.png",
	 		"rating":"./images/3starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/railsIcon.png",
	 		"rating":"./images/1starRatings.png",	
	 	},
	 	{
	 		"icon": "./images/commandLineIcon.png",
	 		"rating":"./images/4starRatings.png",	
	 	}
 	]
 }

 var work = {
 	"jobs": [
 	{
 		"role": "CMS QA Analyst",
 		"employer": "Kobo Inc.",
 		"dates": "August 31, 2015 - December 18, 2015",
 		"location": "Toronto, ON",
 		"description": ""
 	},
 	{
 		"role": "Intranet Web Developer",
 		"employer": "Matcor-Matsu Group Inc.",
 		"dates": "Jan 5, 2015 - May 2, 2015",
 		"location": "Mississauga, ON",
 		"description": ""
 	},
 	{
 		"role": "Wordpress Developer",
 		"employer": "Red Ginger Restaurant",
 		"dates": "August 2014",
 		"location": "Kitchener, ON",
 		"description": ""
 	},
 	{
 		"role": "Math/Science Tutor",
 		"employer": "Self Employed",
 		"dates": "September 2013",
 		"location": "Kitchener, ON",
 		"description": ""
 	}	

 	]

 }


 var education ={
 	"schools": [
 	{
 		"name": "University of Waterloo",
 		"degree":"Bachelor of Applied Science",
 		"dates":"September 2014 - April 2019",
 		"location":"Waterloo, ON",
 		"major":"Electrical Engineering Honors"
 	},
 	{
 		"name": "Huron Heights Secondary School",
 		"degree":"Ontario High School Diploma",
 		"dates":"September 2010 - June 2014",
 		"location":"Kitchener, ON",
 		"major":""
 	},
 	]
 }


var projects = {
	"projects": [
	{
		"name": "Project 1",
		"description": " ",
		"image": "http://placehold.it/150x150"
	},
	{
		"name": "Project 2",
		"description": " ",
		"image": "http://placehold.it/150x150"
	}	
	]

}

function displaySkills() {
	for (skill in bio.skills){
		$("#skills").append(HTMLskillsStart);
		var formattedImage = HTMLskillsImage.replace("%data%",bio.skills[skill].icon);
		var formattedRatings = HTMLskillsRatings.replace("%data%",bio.skills[skill].rating);
		var skillsInfo = formattedImage + formattedRatings;
		$(".skills-entry:last").append(skillsInfo);
	} 
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].role);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var workInfo = formattedEmployer + " " + formattedTitle +  formattedDate + " " + formattedLocation + " " + formattedDescription;
		$(".work-entry:last").append(workInfo);
	}
}

function displayEducation() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var degree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var dates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var location = HTMLschoolLocation.replace("%data%",education.schools[school].location);

		if (education.schools[school].major) {
			var major = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			var workInfo = schoolName + degree + dates + location + major;
		}else {
			workInfo = schoolName + degree + dates + location;
		}

		$(".education-entry:last").append(workInfo);
	}
}


projects.display = function (projects) {
 	for (project in projects.projects){
 		$("#projects").append(HTMLprojectStart);
 		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].name);
 		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
 		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
 		var projectInfo = formattedTitle + formattedDescription + formattedImage;
 		$(".project-entry:last").append(projectInfo);
 	}
}

function displayContact() {
	var email = HTMLemail.replace("%data%",bio.email);
	var github = HTMLgithub.replace("%data%",bio.github);
	$("#footerContacts").append(email+github);
	

}

displayWork();
displaySkills();
displayEducation();
projects.display(projects);
displayContact();
$("#mapDiv").append(googleMap);
