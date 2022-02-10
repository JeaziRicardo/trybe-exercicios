let header = document.getElementById('header-container');
header.style.backgroundColor = 'lightgreen';

let emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = "pink";

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = "yellow";

let headerEmergency0 = document.querySelectorAll('.emergency-tasks h3')[0];
headerEmergency0.style.backgroundColor = "purple";

let headerEmergency1 = document.querySelectorAll('.emergency-tasks h3')[1];
headerEmergency1.style.backgroundColor = "purple";

let noHeaderEmergency0 = document.querySelectorAll('.no-emergency-tasks h3')[0];
noHeaderEmergency0.style.backgroundColor = "black";

let noHeaderEmergency1 = document.querySelectorAll('.no-emergency-tasks h3')[1];
noHeaderEmergency1.style.backgroundColor = "black";

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'darkgreen';