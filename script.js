function updateAbout() {
  let aboutText = document.getElementById("aboutText");
  aboutText.innerText = "I am Rahela Kafiya, a passionate developer and designer who enjoys creating elegant web solutions.";
}

function addProject() {
  let projectList = document.getElementById("projectList");
  let newProject = document.createElement("li");
  newProject.innerText = "New Awesome Project";
  projectList.appendChild(newProject);
}